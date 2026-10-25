//US-1 Ajouter + US-5 Rejex + US-7 StopPropagation


// find the garde manager section where the recette will be added and find the ajouter button 

const gardeSection = document.querySelector("#Garde-manager");
const ajouterButton = document.querySelector("#formula-button");

// create the div that will hold the recettes and append it in garde manager section

const divRecette = document.createElement("div");

divRecette.id = "div-recette";
divRecette.className = "grid grid-cols-1";


gardeSection.appendChild(divRecette);