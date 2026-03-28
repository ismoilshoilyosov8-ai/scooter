let mbDiv = document.querySelector(".header__mb-div");
let buttonBox = document.querySelector(".header__mb-buttons-box");
let openBurger = document.querySelector(".header__mb-open-burger-button");
let closeBurger = document.querySelector(".header__mb-close-burger-button");
let accordionBoxes = document.querySelectorAll(".faq__mini-bottom-boxes");
let accordionIcons = document.querySelectorAll(".faq__botttom-icons");
let accordionTexts = document.querySelectorAll(".faq__texts");
let accordionMiniBoxes = document.querySelectorAll(".faq__mini-bottom-boxes");
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
accordionBoxes.forEach((item, index) => {
  let accordionText = accordionTexts[index];
  let accordionIcon = accordionIcons[index];
  let accordionMiniBox = accordionMiniBoxes[index];
  item.addEventListener("click", (e) => {
    e.preventDefault();
    accordionText.classList.toggle("active");
    accordionMiniBox.classList.toggle("active");
    accordionIcon.classList.toggle("active");
  });
});