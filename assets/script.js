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
let slidesImg = img.src.substring(img.src.lastIndexOf("/") + 1, img.src.length);

function addDotSelected(element) {
  element.classList.add("dot_selected");
}

function removeDotSelected(element) {
  element.classList.remove("dot_selected");
}

function changeImgnTxt(p, nextSlide) {
  slidesImg = nextSlide.image;
  p.innerHTML = nextSlide.tagLine;
}

arrowLeft.addEventListener("click", () => {
  console.log("Clic sur la flèche de gauche");
  let imgNext = 0;
  let p = document.querySelector("#banner > p");
  let dot = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    if (slidesImg === slides[0].image) {
      img.src = `./assets/images/slideshow/${slides[slides.length - 1].image}`;
      imgNext = slides.length - 1;
      addDotSelected(dot[imgNext]);
      removeDotSelected(dot[0]);
    } else if (slidesImg === slides[i].image) {
      img.src = `./assets/images/slideshow/${slides[i - 1].image}`;
      addDotSelected(dot[i - 1]);
      removeDotSelected(dot[i]);
      imgNext = i - 1;
    }
  }
  changeImgnTxt(p, slides[imgNext]);
});

arrowRight.addEventListener("click", () => {
  console.log("Clic sur la flèche de droite");
  let imgNext = 0;
  let p = document.querySelector("#banner > p");
  let dot = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    if (slidesImg === slides[slides.length - 1].image) {
      img.src = `./assets/images/slideshow/${slides[0].image}`;
      addDotSelected(dot[0]);
      removeDotSelected(dot[slides.length - 1]);
    } else if (slidesImg === slides[i].image) {
      img.src = `./assets/images/slideshow/${slides[i + 1].image}`;
      addDotSelected(dot[i + 1]);
      removeDotSelected(dot[i]);
      imgNext = i + 1;
    }
  }
  changeImgnTxt(p, slides[imgNext]);
});

for (i = 0; i < slides.length; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);

  if (slidesImg === slides[i].image) {
    dot.classList.add("dot_selected");
  }
}
