import { fetchProducts } from "./product.js";
const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
});

fetchProducts();
