# Cantina | Youcode

## Application de gestion du menu de la cantine

Cantina est une application web interactive permettant de gérer et de planifier les menus hebdomadaires de la cantine Youcode.

L'application permet au responsable de la rstauration de gérer une réserve de recettes, d'organiser les repas du lundi au vendrerdi et de controler automatiquement le badget quotidien de **50 DH maximum par apprenant**


## Objectifs du projet

- Digitaliser la gestion des mnus de la cantine Youcode.
- Facliter la création et la gestion des recettes.
- Planifier les repas du lundi au vendredi.
- Respecter un budjet maximum de 50 DH par jour.
- Garantir la cohérence des alimentaire des menus.
- Afficher les statistiques et les couts en temps réel.
- proposer une interface moderne, responsive et intuitive.


## Fontionnalités

### 1. Gestion des recettes

L'application permet de gérer une réserve de recettes.

Chaque recette contient: 

- **Nom du plat** : entre 3 et 30 caractères.
- **Catégorie** : Entrée, Plat principal au Dessert.
- **Prix** : montent positif en DH.
- **Badge qualitatif** : Bio, Végétarien ou Classique.

Action disponibles: 

- Ajouter une nouvelle recette.
- Modifier une recette existante.
- Supprimer une recette.
- Consulter les recettes disponibles.
> Une recette déja assignée à un menu doit être retirée du planning avant de pouvoir être  modifiée.

### 2. Planifiation de la semaine

- Attribution des recettes aux jours de la semaine.
- Vérification automatique des catégories.
- Possibilité de retirer une recette du planning.
- Affichage du menu et du coût de chaque journée.

### 3. Gestion du budget

- Budget Maximum : **50 DH / jour**.
- Calcul automatique des coûts.
- Blocage des attributions dépassant le budget.
- Affichage du coût total hebdomadaire.

### 4. Tableau de bord

- Nombre de recettes diqponibles.
- Nombre de jours prêts.
- Coût total de la semaine.
- Vérification de la présence d'un plat végétarien.

### 5. Interface interactive

- Fenêtres modales pour les formulaires.
- Notifications Toast.
- Confirmation avent suppression.
- Manipulation dynamique du DOM.

## Technologies utilisées

- HTML5.
- Tailwind CSS.
- Javascript Vanilla.
- Regex.
- Git & Github.
- vercel.

## Structure du projet
```
cantina/
|__ index.html
|__ script.js
|__ README.md
|__ DOCMENTATION.md
|__ assets/
    |__ images/
```


## Instatlation:

1. Cloner le projet:

``` git clone https://github.com/NoufAssia/cantina.git (a local directory name ex: cantina)```

2. Ouvrir le dossier: 

```cd cantina```
```code cantina```

3. Lancer `index.html` dans un navigateur.

## Demo

https://cantina-three-xi.vercel.app/