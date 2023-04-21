import { fullMenu } from "./objetMenu.js";
import { filterMenu } from "./filterMenu.js";
import { affichageHtml } from "./affichageHtml.js";
import { listTri, cleanHTML } from "./script.js";

export function listertrier() {
  listTri.addEventListener("click", (e) => {
    switch (e.target.classList[0]) {
      case "menu":
        cleanHTML();
        affichageHtml(fullMenu);
        break;
      case "sushi":
        console.log(e.target.classList[0]);
        cleanHTML();
        affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
        break;
      case "maki":
        console.log(e.target.classList[0]);
        cleanHTML();
        affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
        break;
      case "rolls":
        console.log(e.target.classList[0]);
        cleanHTML();
        affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
        break;
      case "sashimi":
        console.log(e.target.classList[0]);
        cleanHTML();
        affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
        break;
      case "onigiri":
        console.log(e.target.classList[0]);
        cleanHTML();
        affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
        break;
      case "ramen":
        console.log(e.target.classList[0]);
        cleanHTML();
        affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
        break;
      case "boisson":
        console.log(e.target.classList[0]);
        cleanHTML();
        affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
        break;
      case "dessert":
        console.log(e.target.classList[0]);
        cleanHTML();
        affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
        break;

      default:
        break;
    }
  });
}
