# Références pédagogiques — Steering Behaviors

Ce répertoire contient des copies **non modifiées** de fichiers pédagogiques issus du dépôt de cours :

- Source : https://github.com/micbuffa/IA2_SteeringBehaviors_Casablanca_G2/tree/main/1-Seek
- Auteur du dépôt source : micbuffa
- Fichiers : `vehicle.js`, `seek-vehicle.js`, `targetFuyante.js`, `snake.js`, `snakeRing.js`, `target.js`, `snakeWander.js`

## Statut d'intégration

**La classe `vehicle.js` est maintenant chargée et utilisée par le jeu.** Les autres fichiers restent des références.
Le jeu jouable est actuellement autonome dans `../index.html`, en Canvas 2D natif, sans p5.js.

La classe `Vehicle` du professeur repose sur p5.js et `createVector()`. Un adaptateur de vecteurs compatible avec les opérations nécessaires (`src/behaviors/course-vector.js`) permet d'utiliser `Vehicle.seek()` et `Vehicle.flee()` sans charger la bibliothèque p5.js complète. La méthode `arrive()` n'est pas utilisée.

Le code source n'affiche pas de licence explicite lors de l'inspection du dépôt ; les fichiers sont ici attribués à leur dépôt d'origine et réutilisés dans un cadre pédagogique, sans prétendre qu'ils ont été écrits par l'auteur de 1-Seek — Snake Hunt.
