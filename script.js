const hamburger = document.getElementById("hamburger");
const hamMenu = document.getElementById("ham-menu");
const closeBtn = document.getElementById("close");

hamburger.addEventListener("click", () => {
  hamMenu.classList.toggle("hidden");
  hamMenu.classList.toggle("block");
  if (hamburger.classList.contains("fa-bars")) {
    hamburger.classList.replace("fa-bars", "fa-times");
  } else if (hamburger.classList.contains("fa-times")) {
    hamburger.classList.replace("fa-times", "fa-bars");
  }
});
