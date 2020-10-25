let sliderButtonNext = document.querySelector('.slider-button-next');
let sliderButtonBack = document.querySelector('.slider-button-back');
let slider = document.querySelector('.slider');

let sliders = document.querySelectorAll('.slider-list');

let currentSlide = 0;


sliderButtonBack.onclick = function(){
    sliders[currentSlide].classList.add("visually-hidden");
    currentSlide = currentSlide - 1;
    if( currentSlide < 0){
        currentSlide = sliders.length - 1;  
    }
    sliders[currentSlide].classList.remove("visually-hidden");
};



sliderButtonNext.onclick = function(){
    sliders[currentSlide].classList.add("visually-hidden");
    currentSlide = currentSlide + 1; 
    if( currentSlide >= sliders.length){
        currentSlide = 0;  
    }
    sliders[currentSlide].classList.remove("visually-hidden");
    if (currentSlide % 2 ) {
      slider.style.backgroundImage = 'url(img/drill.png)';
    } else  slider.style.backgroundImage = 'url(img/perforators.png)';
};
