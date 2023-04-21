const bouton = document.body.querySelector("#darkmode");


export function darkMode() {
    bouton.addEventListener("click", () => {
      document.querySelector("main").classList.toggle("dark-mode");
    });
  }
  