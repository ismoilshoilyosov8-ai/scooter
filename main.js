let mbDiv = document.querySelector(".header__mb-div");
let buttonBox = document.querySelector(".header__mb-buttons-box");
let openBurger = document.querySelector(".header__mb-open-burger-button");
let closeBurger = document.querySelector(".header__mb-close-burger-button");
let mbButton = document.querySelector(".header__mb-button");
let links = document.querySelectorAll(".header__mb-texts");
buttonBox.addEventListener("click", (e) => {
  e.preventDefault();
  mbDiv.classList.toggle("active");
  if (mbDiv.classList.contains("active")) {
    openBurger.style.display = "none";
    closeBurger.style.display = "block";
  } else {
    openBurger.style.display = "block";
    closeBurger.style.display = "none";
  }
});