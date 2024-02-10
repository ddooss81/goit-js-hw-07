function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.getElementById("controls").querySelector('[data-create]');
const destroyButton = document.getElementById("controls").querySelector('[data-destroy]');
const boxesElement = document.getElementById("boxes");
const inputElement = document.getElementById("controls").querySelector('input');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

destroyButton.addEventListener('click', () => {
  boxesElement.innerHTML = "";
  inputElement.value = "";
});

createButton.addEventListener('click', () => {
  let boxElement = "";
  let widthBox = 30;
  let heightBox = 30;
  if (Number(inputElement.value) >= 1 && Number(inputElement.value) <= 100 && Number(inputElement.value) === Math.floor(Number(inputElement.value))) {
    for (let i = 0; i < inputElement.value; i++) {
      boxElement += `<div style="width: ${widthBox}px; height: ${heightBox}px; background-color: ${getRandomHexColor()};"></div>`;

      widthBox += 10;
      heightBox += 10;
    }
  boxesElement.innerHTML = boxElement;
  inputElement.value = "";
  };
});
