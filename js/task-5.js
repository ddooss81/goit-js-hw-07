'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColor.addEventListener('click', () => {
  const ColorName = getRandomHexColor();
  document.body.style.backgroundColor = ColorName;
  colorSpan.textContent = ColorName;
});