const burrIcon = document.querySelector(".fa-bars-staggered");
const sMeniu = document.querySelector(".secret-meniu");
const cl = document.querySelector(".fa-xmark");

burrIcon.addEventListener("click", () => {
  sMeniu.classList.remove("invisible"); 
  sMeniu.classList.add("visible");
});

cl.addEventListener("click", () => {
  sMeniu.classList.remove("visible");
});