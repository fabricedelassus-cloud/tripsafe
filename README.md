# TripSafe RdR v8 — package GitHub Pages

PWA mobile standalone de réduction des risques : documentation, session active, interactions, historique local et usage offline après premier chargement.

## Déploiement GitHub Pages

1. Créer un nouveau dépôt GitHub, par exemple `tripsafe-rdr`.
2. Déposer tous les fichiers de ce dossier à la racine du dépôt : `index.html`, `manifest.webmanifest`, `service-worker.js`, `icon.svg`, le dossier `icons/` et `.nojekyll`.
3. Aller dans **Settings > Pages**.
4. Choisir **Deploy from a branch**.
5. Sélectionner la branche `main` et le dossier `/root`.
6. Ouvrir l'URL GitHub Pages générée : `https://<compte>.github.io/<repo>/`.

## Installation téléphone

- iPhone : ouvrir l'URL dans Safari, bouton Partager, puis **Ajouter à l'écran d'accueil**.
- Android : ouvrir l'URL dans Chrome, puis **Installer l'application** ou **Ajouter à l'écran d'accueil**.

## Données utilisateur

L'historique, les métriques et les sessions restent dans le `localStorage` du navigateur de l'utilisateur. Il n'y a pas de backend, pas de compte, pas de synchronisation et pas d'envoi de données.

## Cadre

Cette app est un outil de réduction des risques à visée pédagogique. Elle ne constitue pas une incitation à consommer, ne remplace pas un avis médical et ne rend jamais une prise sans risque. En cas d'urgence : 112, 15 ou 18.
