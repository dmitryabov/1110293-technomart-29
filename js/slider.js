const sliderButtonNext = document.querySelector(".slider-button-next");
const sliderButtonBack = document.querySelector(".slider-button-back");
const slider = document.querySelector(".slider");
const sliders = document.querySelectorAll(".slider-list");

const sliderData = ["url(img/perforators.png)", "url(img/drill.png)"];

let currentSlide = 0;

const clickButtonHendle = function () {
  sliders[currentSlide].classList.add("visually-hidden");
  currentSlide = (currentSlide + 1) % sliders.length;

  sliders[currentSlide].classList.remove("visually-hidden");

  slider.style.backgroundImage = sliderData[currentSlide];
};

sliderButtonBack.addEventListener("click", clickButtonHendle);

sliderButtonNext.addEventListener("click", clickButtonHendle);
