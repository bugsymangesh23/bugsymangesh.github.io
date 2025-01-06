const { AOS } = require("aos");
AOS.init();

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
function darkMode() {
    let element = document.body;
    element.classList.toggle(dark-mode);
}