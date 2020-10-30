"use strict";

var btnOrder = document.querySelectorAll(".btns-close");
var orderPopup = document.querySelector(".modal-order");
var modalClose = orderPopup.querySelector(".modal-close");
btnOrder.forEach(function (button) {
  button.addEventListener("click", function () {
    orderPopup.classList.add("modal-show");
  });
});
modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (orderPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      orderPopup.classList.remove("modal-show");
    }
  }
});