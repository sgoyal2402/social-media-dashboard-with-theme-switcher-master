//jshint esversion:6

const btn = document.querySelector(".round");
const circle = document.querySelector(".circle");
const body = document.querySelector("body");
const cards = document.querySelectorAll(".card");
const cardTitles = document.querySelectorAll(".card-title");
const cardText = document.querySelectorAll(".text-center .card-text");
const cardHead = document.querySelectorAll(".card-header");
const pp = document.querySelectorAll(".kk");
btn.addEventListener("click", () => {
   circle.classList.toggle("right");
   body.classList.toggle("light");
   body.classList.toggle("dark");
   btn.classList.toggle("white");
   cards.forEach((card) => {
       card.classList.toggle("lig")
   });
   cardTitles.forEach((title) => {
       title.classList.toggle("text");
   });
   cardText.forEach((item) => {
      item.classList.toggle("text-2");
   });
    cardHead.forEach((item) => {
        item.classList.toggle("text-2");
    });
    pp.forEach((item) => {
        item.classList.toggle("text-2");
    });

});

