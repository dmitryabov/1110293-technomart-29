"use strict";

var sliderButtonNext = document.querySelector(".slider-button-next");
var sliderButtonBack = document.querySelector(".slider-button-back");
var slider = document.querySelector(".slider");
var sliders = document.querySelectorAll(".slider-list");
var sliderData = ["url(img/perforators.png)", "url(img/drill.png)"];
var currentSlide = 0;

var clickButtonHendle = function clickButtonHendle() {
  sliders[currentSlide].classList.add("visually-hidden");
  sliderControls[currentSlide].classList.remove("current");
  currentSlide = (currentSlide + 1) % sliders.length;
  sliders[currentSlide].classList.remove("visually-hidden");
  sliderControls[currentSlide].classList.add("current");
  slider.style.backgroundImage = sliderData[currentSlide];
};

sliderButtonBack.addEventListener("click", clickButtonHendle);
sliderButtonNext.addEventListener("click", clickButtonHendle); //slider-controls

var sliderControls = document.querySelectorAll(".slider-control");
var sliderButtonOne = document.querySelector(".slider-control-one");
var sliderButtonTwo = document.querySelector(".slider-control-two");
sliderButtonOne.addEventListener("click", clickButtonHendle);
sliderButtonTwo.addEventListener("click", clickButtonHendle);