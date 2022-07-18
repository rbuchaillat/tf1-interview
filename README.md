# TF1 Interview - Rémi ACENSI

## Installation

Clone the project...

```sh
git clone https://github.com/rbuchaillat/tf1-interview.git
```

Install the dependencies and devDependencies and start the server.

```sh
cd tf1-interview
npm i
npm run dev
```

Questions sur les spécifications manquantes :

- À quoi servent les boutons présent en bas à droite des affiches ?
- Le nombre de pas d'avancements du carrousel doit être de 1 ou égal au nombre d'élément affiché ?
- Pourquoi le premier bouton de pagination passe de moitié par-dessus la première affiche ?
- À quoi sert "image" dans le GraphiQL ? Sert-il à avoir une image de qualité supérieure à "thunmail" présent dans "program" ? Pourquoi "image" est à l'extérieur de "program" et non à l'intérieur ?
- Pourquoi à l'intérieur de "thunmail", présent dans "program", il y a une nouvelle référence à "program" ?

Améliorations possibles dans le jeu de données ?

- Corriger le problème de boucle infinie causé par la présence "program" dans "thunmail"
- Insérer la notion de "image" à l'intérieur de "program" directement si "image" est utile
- Renommer "thunmail" en "thumbnail"

Explication de mes choix :

- Utilisation de Next.js pour faire du SSR afin d'améliorer le SEO 
- Utilisation des modules CSS pour la rapidité et le fait que cela soit déjà gérer par Next.js
- Utilisation de "atomic design" qui est une méthodologie de création d’interfaces graphiques qui s’articule autour de cinq composants : Atomes, Molécules, Organismes, Templates et Pages.
- Une font-size à 62.5% afin de gérer les rem plus facilement car 1rem (accessibilité) = 10px;
- J'ai limité la taille du titre à deux lignes pour la beauté de l'affichage
- J'ai mis une thumbnail par défaut là où les thumbnails de l'api GraphQL ne fonctionnaient pas
