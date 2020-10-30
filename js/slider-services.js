"use strict";

var HIDDEN = "visually-hidden";
var serviceBlocks = document.querySelectorAll(".service-block");
var servicesForm = document.querySelectorAll(".services-input-checkbox");
var lastClicked = servicesForm[0];
var dictionary = {
  deliveryField: "service-delivery",
  guaranteeField: "service-guarantee",
  creditField: "service-credit"
};

for (var i = 0; i < servicesForm.length; i++) {
  servicesForm[i].addEventListener("click", function () {
    document.getElementById("".concat(dictionary[lastClicked.id])).classList.add(HIDDEN);
    document.getElementById("".concat(dictionary[this.id])).classList.remove(HIDDEN);
    lastClicked = this;
  });
}