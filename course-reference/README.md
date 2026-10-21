# Références pédagogiques — Steering Behaviors

Ce répertoire contient des copies **non modifiées** de fichiers pédagogiques issus du dépôt de cours :

- Source : https://github.com/micbuffa/IA2_SteeringBehaviors_Casablanca_G2/tree/main/1-Seek
- Auteur du dépôt source : micbuffa
- Fichiers : `vehicle.js`, `seek-vehicle.js`, `targetFuyante.js`, `snake.js`, `snakeRing.js`, `target.js`, `snakeWander.js`

## Statut d'intégration

**Ces fichiers sont fournis en référence et ne sont pas chargés par le jeu actuel.**
Le jeu jouable est actuellement autonome dans `../index.html`, en Canvas 2D natif, sans p5.js.

La classe `Vehicle` du professeur repose sur p5.js et `createVector()`. Pour pouvoir réellement utiliser ses méthodes `seek()`, `flee()` et `arrive()` dans la simulation, il faut adapter les entités du jeu et charger les dépendances p5 appropriées. La seule copie de ces fichiers ne constitue pas une intégration des algorithmes.

Le code source n'affiche pas de licence explicite lors de l'inspection du dépôt ; les fichiers sont ici attribués à leur dépôt d'origine et réutilisés dans un cadre pédagogique, sans prétendre qu'ils ont été écrits par l'auteur de 1-Seek — Snake Hunt.
