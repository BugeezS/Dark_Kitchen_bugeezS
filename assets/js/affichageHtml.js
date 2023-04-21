import { listerPlat, main, ajoutPanier } from "./script.js";

//#region Function
export function affichageHtml(listMenu) {
  listMenu.forEach((menu) => {
    let catmenu = menu[0].categorie[0];
    let sectionParent = document.createElement("section");
    sectionParent.setAttribute("class", catmenu);
    sectionParent.innerHTML = `<div class ="${catmenu}" ></div><h3>${catmenu}</h3>  `;
    menu.forEach((plat) => {
      sectionParent.append(listerPlat(plat));
      main.append(sectionParent);
    });
  });
  ajoutPanier();
}
