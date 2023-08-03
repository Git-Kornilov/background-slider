'use strict';

// Const DOM elements
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

// Button
rightBtn.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  upgrateView();
});

leftBtn.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  upgrateView();
});

// Set background-image for Body
const setBgToBody = function () {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage; // BackImg from slide
};

// Set class Active for slide
const setActiveSlide = function () {
  slides.forEach(slide => {
    slide.classList.remove('active');

    slides[activeSlide].classList.add('active');
  });
};

// Run function
const upgrateView = function () {
  setActiveSlide();
  setBgToBody();
};

upgrateView();
