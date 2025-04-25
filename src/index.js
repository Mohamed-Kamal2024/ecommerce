window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./css/style.css";
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
console.log("Hello, world!");

document.querySelectorAll(".add-to-cart-btn").forEach((item) => {
  item.addEventListener("click", () => {
    alert("!اضيف هذا المنتج الي عربه الشراء");
  });
});

