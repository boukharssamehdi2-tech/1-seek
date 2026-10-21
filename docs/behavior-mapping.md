# Cartographie des comportements — Snake Hunt

| Comportement | Fichier | Utilisation |
|---|---|---|
| Seek directionnel | `src/behaviors/steering.js` | La tête s'oriente vers le pointeur |
| Flee directionnel | `src/behaviors/steering.js` | Les souris s'éloignent du serpent lorsqu'il est proche |
| Wander directionnel | `src/behaviors/steering.js` | Déplacement autonome des souris hors danger |
| Suivi des segments | `src/game.js` | Chaque anneau suit son prédécesseur à distance fixe |
| Bordures | `src/game.js` | Correction du mouvement près des limites |

Les méthodes `seek`, `flee` et `wander` de ce jeu sont des **versions directionnelles simplifiées**, distinctes des méthodes de steering par forces de la classe p5 `Vehicle` du professeur.

Les fichiers pédagogiques du cours sont copiés, sans modification, dans `course-reference/` et ne sont pas chargés à l'exécution.

Référence : https://github.com/micbuffa/IA2_SteeringBehaviors_Casablanca_G2/tree/main/1-Seek
