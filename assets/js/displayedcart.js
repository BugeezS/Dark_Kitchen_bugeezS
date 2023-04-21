const aside = document.querySelector("aside");




export function displayedcart() {
    console.log(cartItems);
  
    let divcart = document.createElement("div");
    divcart.setAttribute("class", "container_cart");
    aside.style.display = "block";
    cartItems.forEach((plat) => {
      let divplat = document.createElement("div");
      let spanName = document.createElement("span");
      let spanPrix = document.createElement("span");
      spanName.setAttribute("class", "name_item_cart");
      spanPrix.setAttribute("class", "price_item_cart");
      fullMenu.forEach((platSource) => {
        platSource.forEach((e) => {
          if (e.name == plat.children[0].innerHTML) {
            spanName.textContent = e.name + " ";
            spanPrix.textContent = e.prix + " €";
            total = total + e.prix;
          }
  
          if (cartItems.includes) {
          }
        });
        divplat.append(spanName, spanPrix);
      });
      divcart.append(divplat);
    });
    console.log(total);
    aside.append(divcart);
    cartItems = [];
  }