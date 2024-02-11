let userNameEnter = document.getElementById("name-input");
userNameEnter.addEventListener("input", () => {
  if (userNameEnter.value.trim() !== "") {
    document.getElementById("name-output").textContent = userNameEnter.value.trim();
  } else {
    document.getElementById("name-output").textContent = "Anonymous";
  };
});