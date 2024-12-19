// side-nav-bar
document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".side-nav").style.width = "100vw";
    document.querySelector(".side-nav").style.height = "100vh";
    document.body.style.overflow = "hidden";
  });

document
  .querySelector(".side-nav-close")
  .addEventListener("click", function () {
    document.querySelector(".side-nav").style.width = "0";
    document.body.style.overflow = "visible";
  });
