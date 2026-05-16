# TripSafe RdR v16 — GitHub Pages

Version Focus : home par intention, fiches en 60 secondes, modules Neuro en mini-leçons, contenu scientifique complet conservé dans les détails, cockpit Suivi et cache PWA anti-version bloquée.

## Déploiement

1. Déposer tout le contenu de ce dossier à la racine du repo GitHub.
2. Activer GitHub Pages sur `main` / root, ou utiliser le workflow inclus.
3. Ouvrir l’URL HTTPS GitHub Pages sur mobile.
4. Ajouter à l’écran d’accueil.

## Mise à jour PWA

La PWA utilise `version.json`, un service worker `network-first` pour `index.html`, `skipWaiting()`, `clients.claim()` et un cache versionné `tripsafe-rdr-v16-0-0`.

Si l’icône écran d’accueil reste bloquée sur une ancienne version, ouvrir l’app puis utiliser le bouton de mise à jour / déblocage du cache.

## Confidentialité

Pas de compte, pas de serveur applicatif, pas de synchronisation. Les sessions et historiques restent dans le stockage local du navigateur de l’utilisateur.
