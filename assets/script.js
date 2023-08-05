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

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const img = document.querySelector(".banner-img");
const slidesImg = img.src.substring(
  img.src.lastIndexOf("/") + 1,
  img.src.length
);

arrowLeft.addEventListener("click", () => {
  console.log("Clic sur la flèche de gauche");
});

arrowRight.addEventListener("click", () => {
  console.log("Clic sur la flèche de droite");
});

for (i = 0; i < slides.length; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);

  if (slidesImg === slides[i].image) {
    dot.classList.add("dot_selected");
  }
}
