const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const circles = document.querySelector(".circles");

//Initial slides position
slides.forEach((slide, index) => {
  slide.style.transform = `translate(${index * 100}%, -50%)`;
});

console.log(slides);

const goToSlide = (slides) => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translate(${-(currentSlide - i) * 100}%,-50%)`;
  });
};

let currentSlide = 0;
const maxSlide = slides.length - 1;
const leastSlide = 0;

for (i = 0; i < slides.length; i++) {
  const circle = document.createElement("div");
  circle.className = "circle";
  circles.append(circle);
}

circles.children[currentSlide].style.backgroundColor = "red";

next.addEventListener("click", function () {
  //-100%,0%,100%,200%
  if (currentSlide == maxSlide) {
    currentSlide = -1;
  }
  currentSlide++;

  circles.children[currentSlide].style.backgroundColor = "red";
  for (i = 0; i <= maxSlide; i++) {
    if (i == currentSlide) continue;
    circles.children[i].style.backgroundColor = "";
  }
  goToSlide(slides);
});

prev.addEventListener("click", function () {
  if (currentSlide == leastSlide) {
    currentSlide = maxSlide + 1;
  }
  currentSlide--;
  circles.children[currentSlide].style.backgroundColor = "red";
  for (i = 0; i <= maxSlide; i++) {
    if (i == currentSlide) continue;
    circles.children[i].style.backgroundColor = "";
  }
  goToSlide(slides);
});
