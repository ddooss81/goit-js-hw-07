'use strict';

let nameUser = "";
document.getElementById("name-input").addEventListener("keyup", function (event) {
  const inputValue = event.target.value.trim();

  const nameOutput = document.getElementById("name-output");
  if (inputValue !== "") {
    nameOutput.textContent = inputValue;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
