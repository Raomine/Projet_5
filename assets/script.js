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
let i = 0;

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);
}
let dotSelected = document.querySelectorAll(".dot");
dotSelected[i].classList.add("dot_selected");

arrowLeft.addEventListener("click", () => {
  console.log("Clic sur la flèche de gauche");
  dotSelected[i].classList.remove("dot_selected");
  i = i - 1;
  if (i < 0) {
    i = slides.length - 1;
  }
  bannerImage.src = "./assets/images/slideshow/" + slides[i].image;
  bannerText.innerHTML = slides[i].tagLine;
  dotSelected[i].classList.add("dot_selected");
});

arrowRight.addEventListener("click", () => {
  console.log("Clic sur la flèche de droite");
  dotSelected[i].classList.remove("dot_selected");
  i = (i + 1) % slides.length;

  bannerImage.src = "./assets/images/slideshow/" + slides[i].image;
  bannerText.innerHTML = slides[i].tagLine;
  dotSelected[i].classList.add("dot_selected");
});
