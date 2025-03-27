function listenToMouseOverHeaderLogo() {
  const elemento = document.getElementById("header-logo");

  elemento.addEventListener("mouseenter", () => {
    elemento.classList.add("header-logo-altered");
  });

  elemento.addEventListener("mouseleave", () => {
    elemento.classList.remove("header-logo-altered");
  });
}

listenToMouseOverHeaderLogo()