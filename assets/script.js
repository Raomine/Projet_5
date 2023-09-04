const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let dots = document.querySelector(".dots");
let bannerImage = document.querySelector(".banner-img");
let bannerText = document.querySelector("#banner p");
let img = 0;

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);
}
let dotSelected = document.querySelectorAll(".dot");
dotSelected[img].classList.add("dot_selected");

arrowLeft.addEventListener("click", () => {
  console.log("Clic sur la flèche de gauche");
  dotSelected[img].classList.remove("dot_selected");
  img = (img - 1 + slides.length) % slides.length;

  bannerImage.src = "./assets/images/slideshow/" + slides[img].image;
  bannerText.innerHTML = slides[img].tagLine;
  dotSelected[img].classList.add("dot_selected");
});

arrowRight.addEventListener("click", () => {
  console.log("Clic sur la flèche de droite");
  dotSelected[img].classList.remove("dot_selected");
  img = (img + 1) % slides.length;

  bannerImage.src = "./assets/images/slideshow/" + slides[img].image;
  bannerText.innerHTML = slides[img].tagLine;
  dotSelected[img].classList.add("dot_selected");
});
