# 1-Seek — Snake Hunt 🐍

Jeu de poursuite interactif en **HTML, CSS et JavaScript (Canvas 2D)**, hébergé sur GitHub Pages.

**🎮 Jouer :** https://boukharssamehdi2-tech.github.io/1-seek/

## Fonctionnalités
- Serpent guidé par le pointeur, avec rotation limitée par son agilité
- Souris autonomes qui errent et fuient lorsque le serpent approche
- Score, croissance du serpent, chronomètre
- Réglages en temps réel : nombre de souris, vitesses, agilité, longueur, rayon de fuite
- Pause, recommencer, nouvelle vague
- Arène néon et effets de particules

## Organisation

```text
1-seek/
├── index.html                 # Interface HTML
├── style.css                  # Styles de l'arène
├── README.md                  # Présentation
├── SPECIFICATION.md           # Règles et architecture
├── .gitignore
├── src/
│   ├── game.js                # Boucle de jeu, rendu et interactions
│   └── behaviors/
│       ├── steering.js        # Direction Wander et utilitaires
│       └── course-vector.js   # Adaptateur vectoriel pour Vehicle
├── docs/
│   └── behavior-mapping.md    # Cartographie des comportements
├── tests/
│   └── steering.test.cjs      # Tests unitaires
└── course-reference/          # Sources pédagogiques du professeur
    ├── README.md
    ├── vehicle.js
    ├── seek-vehicle.js
    ├── target.js
    ├── targetFuyante.js
    ├── snake.js
    ├── snakeRing.js
    └── snakeWander.js
```

## Exécution
Ouvrir `index.html` dans un navigateur moderne. Aucune installation requise.

## Tests
Avec Node.js 18+ :

```bash
node --test tests/*.test.cjs
```

Les tests vérifient la direction de poursuite, la direction de fuite, la stabilité à distance nulle et la direction d'errance.

## Lien avec le cours de Steering Behaviors
Le jeu charge maintenant **la classe originale `Vehicle` du professeur**, sans modification, via `course-reference/vehicle.js`. Le serpent utilise `Vehicle.seek()` pour calculer sa force d'orientation et les souris utilisent `Vehicle.flee()` en cas de menace. Un adaptateur vectoriel local (`src/behaviors/course-vector.js`) fournit les opérations nécessaires sans charger toute la bibliothèque p5.js. Le suivi des segments et l'errance restent spécifiques au jeu.

Les fichiers originaux du professeur sont regroupés dans `course-reference/` **comme références pédagogiques ; seul `vehicle.js` est chargé à l'exécution**. Leur provenance est documentée :
https://github.com/micbuffa/IA2_SteeringBehaviors_Casablanca_G2/tree/main/1-Seek

Le code de Snake Hunt, ses réglages et son arène restent propres au projet.

## Hébergement
GitHub Pages sert `index.html` depuis la branche `main`, dossier `/ (root)`.
