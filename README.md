# TripSafe RdR v15.2

PWA standalone, offline, locale, sans compte ni serveur.

## Publication GitHub Pages

1. Dépose tout le contenu de ce dossier à la racine du repo.
2. Active GitHub Pages sur `main / root` ou via GitHub Actions.
3. Garde toujours la même URL, par exemple `https://<compte>.github.io/tripsafe-rdr/`.
4. Ne crée pas un nouveau sous-dossier par version : l'icône écran d'accueil doit pointer vers la même URL.

## Mise à jour PWA anti-version-collée

v15.2 inclut :

- `version.json` en no-store via fetch côté app ;
- `service-worker.js` versionné `tripsafe-rdr-v15-2-0` ;
- `skipWaiting()` + `clients.claim()` ;
- suppression automatique des anciens caches `tripsafe-rdr-*` ;
- stratégie network-first pour `index.html` ;
- bouton de réparation cache dans l'app.

Si l'icône écran d'accueil reste bloquée sur une ancienne version déjà installée avant v15.2, ouvrir l'app depuis le lien GitHub Pages, puis utiliser `Débloquer le cache`. Une réinstallation unique de l'icône peut être nécessaire pour les très anciennes installations ; après v15.2, le système d'update est prévu pour éviter ce blocage.

## Confidentialité

Les sessions restent dans le localStorage du téléphone. Aucun backend.

## Urgence

112 / 15 / 18.
