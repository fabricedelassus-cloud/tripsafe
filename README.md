# TripSafe RdR v7.2

PWA mobile-first de réduction des risques, autonome et installable via HTTPS.

## Correctif v7.2

Cette version corrige le comportement du chart d'interactions :

- la ligne du haut du chart reste fixe pendant le scroll vertical interne du tableau ;
- la colonne de gauche reste fixe pendant le scroll horizontal ;
- le coin supérieur gauche reste fixe dans les deux directions ;
- le premier tap sur une cellule affiche la bulle d'information inline ;
- le chart ne se referme plus automatiquement après le premier tap ;
- le deuxième tap sur la même cellule ouvre l'explication complète dans la page Mélanges ;
- les cellules du chart sont aussi accessibles au clavier avec Entrée ou Espace.

Toutes les informations, interactions, contre-indications, textes de sécurité et données médicales existantes sont conservés.

## Installation

Déposer ce dossier sur une URL HTTPS puis ouvrir sur mobile. Sur iPhone : Safari > Partager > Ajouter à l'écran d'accueil. Sur Android : Chrome > Installer l'application ou Ajouter à l'écran d'accueil.

## Données

Les données utilisateur restent dans le localStorage du téléphone. Pas de compte, pas de serveur, pas de synchronisation.
