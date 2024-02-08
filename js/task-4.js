'use strict';

const loginUser = document.querySelector(".login-form");

loginUser.addEventListener("submit", (doIt) => {
  doIt.preventDefault();

  let userEmail = loginUser.elements.email.value.trim();
  let userPassword = loginUser.elements.password.value.trim();

  if (!userEmail || !userPassword) {
    alert("All form fields must be filled in");
    return;
  }

  const userIdentData = {
    userEmail,
    userPassword,
  };
ь
  console.log(userIdentData);

  loginUser.reset();
});