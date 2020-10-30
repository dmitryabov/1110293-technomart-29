"use strict";

var contactsButton = document.querySelector(".contacts-button"); //открываю модалку

var loginPopup = document.querySelector(".modal-login"); //модалка

var contactsClose = loginPopup.querySelector(".modal-close"); //закрыть модалку

var mailForm = loginPopup.querySelector(".mail-form"); //forma

var nameUser = loginPopup.querySelector(".name-user"); // инпут ввода логина

var emailUser = loginPopup.querySelector(".email-user"); // инпут ввода email

var isStorageSupport = true;
var storage = "";
contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");

  if (storage) {
    nameUser.value = storage;
    nameUser.focus();
  } else emailUser.focus();
});
contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});
mailForm.addEventListener("submit", function (evt) {
  if (!emailUser.value || !nameUser.value) {
    evt.preventDefault();
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameUser.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});