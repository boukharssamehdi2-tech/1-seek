# 1-Seek — Snake Hunt 🐍

Jeu de poursuite interactif en **HTML, CSS et JavaScript (Canvas 2D)**, jouable dans un navigateur.

**Jouer :** https://boukharssamehdi2-tech.github.io/1-seek/

## Fonctionnement
Déplacer le pointeur sur l'arène pour guider le serpent. Attraper les souris fait augmenter le score et la longueur. Les souris fuient lorsque le serpent approche.

- Arène futuriste à néons
- Souris autonomes avec détection de danger et endurance
- Compteur de captures, longueur du serpent et chronomètre
- Réglages instantanés du nombre de souris, des vitesses, de l'agilité, de la longueur initiale et du rayon de fuite
- Pause, redémarrage et nouvelle vague

## Démarrer localement
Ouvrir `index.html` dans un navigateur : aucune installation requise.

## Structure
- `index.html` : jeu jouable autonome, incluant styles et logique Canvas
- `SPECIFICATION.md` : règles du jeu, comportements et paramètres
- `course-reference/` : **copies pédagogiques du professeur**, non chargées par le jeu

## Liens avec le cours
Le jeu actuel implémente une forme simplifiée de la **poursuite (Seek)**, de la **fuite (Flee)** et de l'**errance (Wander)** en JavaScript natif. Il **n'utilise pas encore les méthodes `Vehicle` fournies en cours**.

Les fichiers pédagogiques originaux proviennent de :
https://github.com/micbuffa/IA2_SteeringBehaviors_Casablanca_G2/tree/main/1-Seek

Ils sont fournis avec leur attribution dans `course-reference/README.md` et ne sont pas revendiqués comme code original du projet.

## Déploiement
GitHub Pages : Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

Ce projet conserve son interface et sa logique propres.
