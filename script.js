//US-1 Ajouter + US-5 Rejex + US-7 StopPropagation

// find the garde manager section where the recette will be added and find the ajouter button

const gardeSection = document.querySelector("#Garde-manager");
const ajouterButton = document.querySelector("#formula-button");

// create the div that will hold the recettes and append it in garde manager section

const divRecette = document.createElement("div");

divRecette.id = "div-recette";
divRecette.className = "grid grid-cols-1";

gardeSection.appendChild(divRecette);

// create the div that will hold the formula

const formula = document.createElement("div");

formula.id = "formule";

document.body.appendChild(formula);

// create the formule

formula.innerHTML = `
<div id="formule-recette-parent-div" class=" hidden  fixed inset-0 z-50 bg-black/50 p-4 flex items-center justify-center">
<div id="formula-content"class="w-full max-w-3xl rounded-xl bg-white p-6 shadow-xl">
 <div class="flex justify-between gap-4 items-center mt-4 mb-4">
    <h2 class="text-2xl font-bold">Ajouter une recette</h2>
    <button  id="close-button"type="submit" class="rounded-2xl border-slate-300 px-3 py-1 text-2xl border hover:bg-slate-300 hover:text-white" >x</button>
  </div>

  <form id = "recette-form" class ="space-y-3" novalidate>
    <div>
        <label for ="recette-name" class="mb-1 block">Nom du plat</label>
        <input id ="recette-name" name="recette-name" type="text" required class="w-full rounded-lg border p-2" placeholder="Ex: Couscous">
        <p id="name-error" class="mt-1 text-sm text-red-600"></p>
    </div>
    <div>
    <label for ="recette-category" class="mb-1 block">Catégorie</label>
    <select
    id="recette-category" name="recette-category" required class="w-full rounded-lg border p-2">
    <option value="">Choisir une catégorie</option>
    <option value="Entrée">Entrée</option>
    <option value="Plat principal">Plat peincipal</option>
    <option value="Dessert">Dessert</option>
    </select>
    <p id="category-error" class="mt-1 text-sm text-red-600"></p>
    </div>
    <div>
    <label for ="recette-prix" class="mb-1 block">Prix</label>
    <input id="recette-prix" name="recette-prix" type="text" required class="w-full rounded-lg border p-2" placeholder="Ex: 25">
    <p id="prix-error" class="mt-1 text-sm text-red-600"></p>
    </div>
    <div>
    <label for="recette-badge" class="mb-1 block">Badge</label>
    <select
        id ="recette-badge" name="recette-badge" required class="w-full rounded-lg border p-2">
        <option value="">Choisir un badge</option>
        <option value="Bio">Bio</option>
        <option value="Végétarien">Végétarien</option>
        <option value="Classique">Classique</option>
    </select>
    <p id="badge-error" class="mt-1 text-sm text-red-600"></p>
    </div>
    <div class="flex justify-end gap-3 pt-2">
        <button id="annuler-recette" type="button" class="rounded-lg border border-[#f9b332]  text-[#f9b332] hover:bg-[#f9b332] hover:text-white px-4 py-2">Annuler</button>
        <button id="submit-recette" type="submit"  class="rounded-lg px-4 py-2 text-white bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50 ">Ajouter</button>
    </div>
  </form>
  </div>
</div>
`;

const recetteModal = document.querySelector("#formule-recette-parent-div");

const formulaContent = document.querySelector("#formula-content");

const recetteFormula = document.querySelector("#recette-form");

const closeButton = document.querySelector("#close-button");
const anullerButton = document.querySelector("#annuler-recette");
const submitButton = document.querySelector("#submit-recette");

const nameInput = document.querySelector("#recette-name");
const categoryInput = document.querySelector("#recette-category");
const prixInput = document.querySelector("#recette-prix");
const badgeInput = document.querySelector("#recette-badge");

const nameError = document.querySelector("#name-error");
const categoryError = document.querySelector("#category-error");
const prixError = document.querySelector("#prix-error");
const badgeError = document.querySelector("#badge-error");

const nameRegex = /^[\p{L}\p{N}][\p{L}\p{N} '\u2019-]{1,28}[\p{L}\p{N}]$/u;
const prixRegex = /^(?: \d+(?:\.\d+)?)$/;

function openModal() {
  recetteModal.classList.remove("hidden");
  nameInput.focus();
}

function clearErrorMsg() {
  nameError.textContent = "";
  categoryError.textContent = "";
  prixError.textContent = "";
  badgeError.textContent = "";
}

function closeModal() {
  recetteModal.classList.add("hidden");
  recetteFormula.reset();
  clearErrorMsg();
}

formulaContent.addEventListener("click", function (event) {
  event.stopPropagation();
});

recetteModal.addEventListener("click", function (event) {
  if (event.target === recetteModal) {
    closeModal();
  }
});

ajouterButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
anullerButton.addEventListener("click", closeModal);

// validate inputs by regex

// stop the default behavior of submit and reate the recette article

function afficherRecette(recette) {
  const article = document.createElement("article");
  article.className =
    "flex justify-between rounded-xl border-slate-200 border shadow-sm bg-white p-4";

  const divOne = document.createElement("div");

  const divTwo = document.createElement("div");
  divTwo.className = "flex items-end justify-end gap-3";

  const title = document.createElement("h3");
  title.className = "text-lg font-bold text-[#601c00]";
  title.textContent = recette.name;

  const category = document.createElement("p");
  category.className = "mt-2 text-sm text-black";
  category.textContent = "Categorie: " + recette.category;

  const prix = document.createElement("p");
  prix.className = "mt-2 text-sm text-black";
  prix.textContent = "Prix: " + recette.prix + "DH";

  const badge = document.createElement("p");
  badge.className = "mt-2 text-sm text-black";
  badge.textContent = recette.badge;

  const modifier = document.createElement("button");
  modifier.type = "button";
  modifier.className =
    " flex flex-end gap-3 border border-[#f9b332] rounded-2xl p-3 text-[#f9b332] shadow-sm border-2 hover:bg-[#f9b332] hover:text-white";
  modifier.textContent = "Modifier";

  const supprimer = document.createElement("button");
  supprimer.type = "button";
  supprimer.className =
    "border border-[#601c00] rounded-2xl p-3 text-[#601c00] shadow-sm border-2 hover:bg-[#601c00] hover:text-white";
  supprimer.textContent = "Supprimer";

  divOne.append(title, category, prix, badge);

  divTwo.append(modifier, supprimer);

  article.append(divOne, divTwo);

  divRecette.appendChild(article);
}

recetteFormula.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const categoryValue = categoryInput.value;
  const prixValue = prixInput.value.trim();
  const badgeValue = badgeInput.value;

  const recette = {
    name: name,
    category: categoryValue,
    prix: prixValue,
    badge: badgeValue,
  };

  const recettes = JSON.parse(localStorage.getItem("recettes") || "[]");
  recettes.push(recette);
  localStorage.setItem("recettes", JSON.stringify(recettes));

  afficherRecette(recette);

  closeModal();
});

// use local storage to save the recettes articles

const saveRecette = JSON.parse(
    localStorage.getItem("recettes") || "[]"
);

saveRecette.forEach(function (recette){
    afficherRecette(recette);
});