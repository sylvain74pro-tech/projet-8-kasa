# Comprendre les fichiers JSON de Kasa

Le format JSON ne prend pas en charge les commentaires. Les fichiers JSX, CSS et HTML sont annotés dans leur code source.

- `src/jsx/data/about.json` contient les quatre panneaux d’À propos. Chaque entrée contient un `id` qui sert de clé React, un `title` pour le bouton et un `text` pour le contenu. `About.jsx` importe le tableau et le parcourt avec `map`.
- `package.json` déclare les scripts de lancement, de compilation et de prévisualisation, ainsi que les dépendances React, React Router et Vite.
- `package-lock.json` enregistre les versions résolues des dépendances. `npm ci` l’utilise pour reproduire une installation.
- Les pages HTML du dossier `archives-frontend` appartiennent aux archives. Le frontend React démarre depuis le fichier `index.html` à la racine.