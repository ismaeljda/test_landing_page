import express from 'express';
import { google } from 'googleapis';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware de debug
app.use((req, res, next) => {
  console.log(`\n📥 ${req.method} ${req.path}`);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  next();
});

app.use(cors());
app.use(express.json());

// Configuration Google Sheets
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
const SHEET_NAME = process.env.GOOGLE_SHEET_NAME || 'Feuille 1';

// Configuration OAuth2
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Configurer le refresh token
if (process.env.GOOGLE_REFRESH_TOKEN) {
  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });
}

const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

// Endpoint pour sauvegarder un email
app.post('/api/subscribe', async (req, res) => {
  console.log('\n🔍 === DÉBUT TRAITEMENT /api/subscribe ===');
  console.log('📦 Body reçu:', JSON.stringify(req.body, null, 2));

  const { name, email, website } = req.body;

  console.log('📋 Données extraites:');
  console.log('  - name:', name);
  console.log('  - email:', email);
  console.log('  - website:', website);

  if (!email) {
    console.log('❌ Email manquant');
    return res.status(400).json({ error: 'Email requis' });
  }

  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log('❌ Email invalide:', email);
    return res.status(400).json({ error: 'Email invalide' });
  }

  console.log('✅ Validation OK');

  try {
    console.log('📊 Tentative d\'ajout à Google Sheets...');
    console.log('  - SPREADSHEET_ID:', SPREADSHEET_ID);
    console.log('  - SHEET_NAME:', SHEET_NAME);

    // Ajouter les données avec la date
    const timestamp = new Date().toLocaleString('fr-FR');
    const rowData = [name || '', email, website || '', timestamp];

    console.log('📝 Données à insérer:', rowData);

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:D`,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [rowData],
      },
    });

    console.log('✅ Réponse Google Sheets:', response.data);
    console.log(`✅ Données ajoutées: ${name} - ${email} - ${website} à ${timestamp}`);
    res.json({ success: true, message: 'Informations enregistrées avec succès' });

  } catch (error) {
    console.error('❌ ERREUR complète:', error);
    console.error('❌ Message:', error.message);
    console.error('❌ Stack:', error.stack);
    res.status(500).json({
      error: 'Erreur lors de l\'enregistrement',
      details: error.message
    });
  }

  console.log('🔍 === FIN TRAITEMENT /api/subscribe ===\n');
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log('\n' + '='.repeat(60));
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
  console.log('='.repeat(60));
  console.log(`📊 Google Sheet ID: ${SPREADSHEET_ID}`);
  console.log(`📝 Feuille: ${SHEET_NAME}`);
  console.log(`🔑 Refresh Token configuré: ${process.env.GOOGLE_REFRESH_TOKEN ? 'OUI ✅' : 'NON ❌'}`);
  console.log('='.repeat(60));
  console.log('📡 Endpoints disponibles:');
  console.log('  - POST http://localhost:' + PORT + '/api/subscribe');
  console.log('  - GET  http://localhost:' + PORT + '/health');
  console.log('='.repeat(60) + '\n');
});
