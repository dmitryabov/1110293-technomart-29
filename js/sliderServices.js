const HIDDEN = "visually-hidden";

const serviceBlocks = document.querySelectorAll(".service-block");
const servicesForm = document.querySelectorAll(".services-input-checkbox");

let lastClicked = servicesForm[0];

const dictionary = {
  deliveryField: `service-delivery`,
  guaranteeField: `service-guarantee`,
  creditField: `service-credit`,
};

for (let i = 0; i < servicesForm.length; i++) {
  servicesForm[i].addEventListener("click", function () {
    document
      .getElementById(`${dictionary[lastClicked.id]}`)
      .classList.add(HIDDEN);

    document
      .getElementById(`${dictionary[this.id]}`)
      .classList.remove(HIDDEN);
    lastClicked = this;
  });
}
