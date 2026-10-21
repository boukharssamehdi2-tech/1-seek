# Spécification technique — 1-Seek Snake Hunt

## Présentation
Snake Hunt est un jeu de poursuite interactif en Canvas 2D. Le joueur contrôle la direction d'un serpent au pointeur et capture des souris autonomes.

## Règles
- La souris détermine la cible de direction de la tête du serpent.
- Les segments suivent le segment précédent en conservant une distance approximative.
- Les souris errent de façon autonome et fuient quand le serpent entre dans leur rayon de détection.
- Les souris proches des bords sont ramenées vers l'intérieur par une correction de direction.
- Une capture augmente le score de 1, fait grandir le serpent de 3 segments et fait réapparaître la souris.
- Pause et recommencer sont disponibles. Le chronomètre ne progresse pas en pause.

## Paramètres
- Souris simultanées : de 2 à 30
- Vitesse serpent : de 1 à 10
- Vitesse souris : de 0,5 à 7
- Agilité : de 1 à 12
- Longueur initiale : de 5 à 55
- Rayon de fuite : de 40 à 300 pixels

## Implémentation actuelle
Le code jouable est autonome dans `index.html` et utilise le Canvas 2D natif.
- **Poursuite directionnelle (seek simplifié)** : la direction désirée est l'angle vers le pointeur ; la rotation de la tête est limitée par l'agilité.
- **Fuite directionnelle (flee simplifié)** : chaque souris calcule une direction opposée au serpent lorsque la distance est inférieure au rayon configuré.
- **Wander simplifié** : hors du rayon de fuite, une souris choisit périodiquement une direction aléatoire.
- **Séparation de segments** : correction géométrique de la distance au prédécesseur.

Le jeu utilise désormais **la classe `Vehicle` originale du professeur**. La tête du serpent exploite `Vehicle.seek()` pour le calcul d'orientation et les souris exploitent `Vehicle.flee()` pour s'éloigner du serpent. Le rendu demeure en Canvas 2D. L'adaptateur `src/behaviors/course-vector.js` fournit les opérations vectorielles requises par ces méthodes. `Vehicle.arrive()` n'est pas utilisé actuellement.

## Matériel pédagogique
Les fichiers copiés depuis le cours sont regroupés dans `course-reference/`, avec attribution explicite. Le fichier `vehicle.js` est **chargé et exécuté** par le jeu ; les autres restent des références non chargées. Leur utilisation réelle requiert une intégration avec p5.js et une adaptation des entités.

Source pédagogique : https://github.com/micbuffa/IA2_SteeringBehaviors_Casablanca_G2/tree/main/1-Seek

## Exécution
Ouvrir `index.html` dans un navigateur. Pour GitHub Pages : utiliser la branche `main`, dossier `/ (root)`.

Site : https://boukharssamehdi2-tech.github.io/1-seek/
