let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides")[0].children;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

function changeSlide(n) {
  slideIndex += n;
  showSlides();
}

const custFlags = document.querySelector(".customer__flags");
setInterval(() => {
  custFlags.scrollLeft += 150;

  if (custFlags.scrollLeft + custFlags.clientWidth >= custFlags.scrollWidth)
    custFlags.scrollLeft = 0;
}, 2000);

const manuFlags = document.querySelector(".manufac__flags");
setInterval(() => {
  manuFlags.scrollLeft += 200;

  if (manuFlags.scrollLeft + manuFlags.clientWidth >= manuFlags.scrollWidth)
    manuFlags.scrollLeft = 0;
}, 2000);
