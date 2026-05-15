# TripSafe RdR v14.1

PWA mobile standalone de pédagogie biologique et de réduction des risques. Données locales uniquement, sans compte ni serveur.

## Déploiement GitHub Pages

1. Créer un dépôt GitHub.
2. Déposer tout le contenu de ce dossier à la racine du dépôt.
3. Aller dans **Settings > Pages**.
4. Choisir **Deploy from a branch** puis `main` / `/root`, ou utiliser le workflow GitHub Actions inclus.
5. Ouvrir l'URL GitHub Pages sur mobile puis **Ajouter à l'écran d'accueil**.

## Correction v14.1

Le formulaire complet de Suivi ne se referme plus pendant la saisie de la quantité. Les champs numériques et notes mettent à jour l'état local sans reconstruire l'interface à chaque frappe ; le rendu complet se fait au changement/blur avec restauration des blocs ouverts.
