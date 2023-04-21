import { fullMenu } from "./objetMenu.js";
import { darkMode } from "./darkMode.js";
import { displayedcart } from "./displayedcart.js";
import { affichageHtml } from "./affichageHtml.js";
import { listertrier } from "./listertrier.js";

export function listerPlat(plat) {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  plat.categorie.forEach((e) => {
    card.classList.add(e);
  });

  let picture = document.createElement("img");
  picture.classList.add("img");
  picture.src = plat.picture;
  card.appendChild(picture);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  let name = document.createElement("h2");
  name.classList.add("h2");
  name.textContent = plat.name;
  cardBody.appendChild(name);

  let prix = document.createElement("span");

  let button = document.createElement("button");
  cardBody.appendChild(button);
  button.classList.add("btnPanier");
  button.textContent = "test";

  // prix.innerHTML = `<span class="prixArticle ">Prix</span> :  ${plat.prix} €`;
  prix.classList.add("item");
  prix.textContent = "Prix : " + plat.prix + " €";
  cardBody.appendChild(prix);

  let categorie = document.createElement("span");
  categorie.classList.add("item");
  categorie.textContent = "Catégories : " + plat.categorie;
  cardBody.appendChild(categorie);
  if (plat.ingredients != null) {
    let ingredients = document.createElement("span");
    ingredients.classList.add("item");
    ingredients.textContent = "ingrédients : " + plat.ingredients;
    cardBody.appendChild(ingredients);
  }

  return card;
}


export function cleanHTML() {
  main.querySelectorAll("section").forEach((element) => {
    element.remove();
  });
}
export function ajoutPanier() {
  const btnPanier = document.querySelectorAll(".btnPanier");
  btnPanier.forEach((item) => {
    item.addEventListener("click", () => {
      cartItems.push(item.parentNode);
    });
  });
}

const checkout = document.querySelector("#checkout");
checkout.addEventListener("click", () => {
  displayedcart();
});

//#endregion

export const listTri = document.querySelector(".listTri");
for (const iterator of listTri.children) {
  console.log(iterator);
  iterator.setAttribute("class", iterator.innerHTML.valueOf());
}
export const main = document.querySelector("main");
let cartItems = [];

darkMode();
affichageHtml(fullMenu);
listertrier();

