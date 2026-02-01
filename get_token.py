"""
Script Python pour obtenir le refresh token Google OAuth
"""

from google_auth_oauthlib.flow import InstalledAppFlow
import json

# Les scopes nécessaires pour Google Sheets
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

# Vos credentials OAuth (à remplacer par vos vraies valeurs)
CLIENT_CONFIG = {
    "installed": {
        "client_id": "YOUR_GOOGLE_CLIENT_ID",
        "client_secret": "YOUR_GOOGLE_CLIENT_SECRET",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "redirect_uris": ["http://localhost:8080/"]
    }
}

def main():
    print("🔐 Récupération du refresh token Google OAuth...\n")

    # Créer le flux OAuth
    flow = InstalledAppFlow.from_client_config(CLIENT_CONFIG, SCOPES)

    # Lancer le serveur local et obtenir les credentials
    print("📱 Une page web va s'ouvrir dans votre navigateur...")
    print("👉 Connectez-vous avec votre compte Google et acceptez les permissions\n")

    creds = flow.run_local_server(port=8080)

    print("\n✅ Authentification réussie!\n")
    print("=" * 60)
    print("📋 REFRESH TOKEN:")
    print("=" * 60)
    print(creds.refresh_token)
    print("=" * 60)
    print("\n📝 Copiez ce token dans votre fichier .env:")
    print(f"GOOGLE_REFRESH_TOKEN={creds.refresh_token}")
    print("\n✨ Terminé!")

if __name__ == '__main__':
    main()
