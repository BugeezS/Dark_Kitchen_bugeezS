function filterMenu(listMenu, tags) {
    let monTableau = new Array();
    listMenu.forEach((menu) => {
      menu.forEach((plat) => {
        plat.categorie.forEach((element) => {
          if (tags.includes(element)) {
            monTableau.push(plat);
          }
        });
      });
    });
    return monTableau;
  }
export {filterMenu};