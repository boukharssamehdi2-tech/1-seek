# Cartographie des comportements — Snake Hunt

| Comportement | Fichier | Utilisation |
|---|---|---|
| Seek directionnel | `course-reference/vehicle.js` → `Vehicle.seek()` | La tête s'oriente vers le pointeur |
| Flee directionnel | `course-reference/vehicle.js` → `Vehicle.flee()` | Les souris s'éloignent du serpent lorsqu'il est proche |
| Wander directionnel | `src/behaviors/steering.js` | Déplacement autonome des souris hors danger |
| Suivi des segments | `src/game.js` | Chaque anneau suit son prédécesseur à distance fixe |
| Bordures | `src/game.js` | Correction du mouvement près des limites |

Le serpent et les souris utilisent maintenant les **méthodes de forces de steering `seek()` et `flee()` de la classe `Vehicle` originale du professeur**. Le comportement `wander` demeure une version directionnelle simplifiée propre au jeu.

Les fichiers pédagogiques du cours sont copiés, sans modification, dans `course-reference/` ; `vehicle.js` est désormais chargé à l'exécution.

Référence : https://github.com/micbuffa/IA2_SteeringBehaviors_Casablanca_G2/tree/main/1-Seek
