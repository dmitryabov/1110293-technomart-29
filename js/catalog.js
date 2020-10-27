const btnOrder = document.querySelectorAll(".btns-close");
const orderPopup = document.querySelector(".modal-order");
const modalClose = orderPopup.querySelector(".modal-close");

btnOrder.forEach((button) => {
  button.addEventListener("click", () => {
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
