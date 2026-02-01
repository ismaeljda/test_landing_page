# Bloumy - Landing Page

Landing page pour Bloumy avec formulaire d'inscription à la liste d'attente et backend Node.js + Google Sheets.

## 📋 Table des matières

- [Architecture](#architecture)
- [Installation locale](#installation-locale)
- [Déploiement](#déploiement)
- [Variables d'environnement](#variables-denvironnement)

## 🏗️ Architecture

- **Frontend** : React + Vite + TailwindCSS (déployé sur Vercel)
- **Backend** : Node.js + Express + Google Sheets API (déployé sur Render.com)

## 💻 Installation locale

### Prérequis

- Node.js 18+
- npm ou pnpm
- Compte Google Cloud (pour Google Sheets API)

### 1. Cloner le projet

```bash
git clone https://github.com/votre-repo/test_landing_page.git
cd test_landing_page
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les variables d'environnement

Créer un fichier `.env` à la racine du projet :

```env
# Google OAuth Credentials
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here
GOOGLE_REDIRECT_URI=http://localhost:8000/auth/google/callback

# Google Spreadsheet
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id_here
GOOGLE_SHEET_NAME=Feuille 1

# Refresh Token (obtenu via get_token.py)
GOOGLE_REFRESH_TOKEN=your_refresh_token_here

# Server Port
PORT=8000
```

Créer un fichier `.env.local` pour le frontend :

```env
VITE_API_URL=http://localhost:8000
```

### 4. Obtenir le Google Refresh Token

```bash
pip install -r requirements.txt
python get_token.py
```

Suivez les instructions et copiez le refresh token dans votre fichier `.env`.

### 5. Démarrer en développement

**Terminal 1 - Backend :**
```bash
npm run server
```

**Terminal 2 - Frontend :**
```bash
npm run dev
```

Le frontend sera accessible sur `http://localhost:5173` et le backend sur `http://localhost:8000`.

## 🚀 Déploiement

### Backend sur Render.com (Gratuit)

#### Étape 1 : Créer un compte Render

1. Allez sur [render.com](https://render.com)
2. Créez un compte (gratuit)
3. Connectez votre compte GitHub

#### Étape 2 : Créer un nouveau Web Service

1. Cliquez sur **"New +"** → **"Web Service"**
2. Sélectionnez votre repository GitHub
3. Configurez le service :
   - **Name** : `bloumy-backend` (ou ce que vous voulez)
   - **Environment** : `Node`
   - **Build Command** : `npm install`
   - **Start Command** : `npm start`
   - **Plan** : `Free`

#### Étape 3 : Ajouter les variables d'environnement

Dans la section **Environment**, ajoutez toutes ces variables :

```
GOOGLE_CLIENT_ID=votre_client_id
GOOGLE_CLIENT_SECRET=votre_client_secret
GOOGLE_REDIRECT_URI=https://developers.google.com/oauthplayground
GOOGLE_SPREADSHEET_ID=votre_spreadsheet_id
GOOGLE_SHEET_NAME=Feuille 1
GOOGLE_REFRESH_TOKEN=votre_refresh_token
```

#### Étape 4 : Déployer

1. Cliquez sur **"Create Web Service"**
2. Render va déployer automatiquement
3. Une fois déployé, vous aurez une URL type : `https://bloumy-backend.onrender.com`

**⚠️ Important** : Notez cette URL, vous en aurez besoin pour Vercel.

### Frontend sur Vercel

#### Étape 1 : Aller sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Importez votre projet GitHub

#### Étape 2 : Configurer les variables d'environnement

Dans **Settings** → **Environment Variables**, ajoutez :

```
VITE_API_URL=https://votre-backend.onrender.com
```

Remplacez `votre-backend.onrender.com` par l'URL de votre backend Render.

#### Étape 3 : Redéployer

1. Allez dans **Deployments**
2. Cliquez sur **"Redeploy"** pour que la variable soit prise en compte

## 🔧 Variables d'environnement

### Backend (.env)

| Variable | Description | Exemple |
|----------|-------------|---------|
| `GOOGLE_CLIENT_ID` | Client ID Google OAuth | `123456-xxx.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | Client Secret Google OAuth | `GOCSPX-xxxxx` |
| `GOOGLE_REDIRECT_URI` | URI de redirection OAuth | `http://localhost:8000/auth/google/callback` |
| `GOOGLE_SPREADSHEET_ID` | ID du Google Sheet | `1T-uMbqs3aCcBnO8kEu-1Isk1al4xxVhX8eEPmQFhJS8` |
| `GOOGLE_SHEET_NAME` | Nom de la feuille | `Feuille 1` |
| `GOOGLE_REFRESH_TOKEN` | Token de rafraîchissement OAuth | `1//05Xr3orVAXhJM...` |
| `PORT` | Port du serveur (auto sur Render) | `8000` |

### Frontend (.env.local)

| Variable | Description | Exemple |
|----------|-------------|---------|
| `VITE_API_URL` | URL du backend API | `http://localhost:8000` (local) ou `https://votre-backend.onrender.com` (prod) |

## 📝 Scripts disponibles

- `npm run dev` - Démarre le frontend en mode développement
- `npm run build` - Build le frontend pour la production
- `npm run server` - Démarre le backend Node.js
- `npm start` - Alias pour `npm run server` (utilisé par Render)

## 🐛 Dépannage

### Le formulaire ne fonctionne pas en production

1. Vérifiez que `VITE_API_URL` est configuré sur Vercel
2. Vérifiez que le backend Render est bien démarré
3. Ouvrez la console du navigateur pour voir les erreurs

### Le backend Render s'endort

C'est normal avec le plan gratuit. Le backend se réveille automatiquement à la première requête (~30 secondes de délai).

### Erreur CORS

Vérifiez que l'URL de votre frontend Vercel est bien dans la configuration CORS du backend (`server.js` ligne 13-20).

## 📄 Licence

MIT
