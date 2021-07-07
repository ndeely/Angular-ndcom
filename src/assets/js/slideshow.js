let slideIndex = 0;
setTimeout(carousel, 1000);

function carousel() {
  let current;
  const slides = document.getElementsByClassName("mySlides");
  const slides2 = document.getElementsByClassName("mySlides2");

  if (slides.length !== 0) {
    for (current = 0; current < slides.length; current++) {
      slides[current].classList.remove('active');
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].classList.add('active');
  }

  if (slides2.length !== 0) {
    for (current = 0; current < slides2.length; current++) {
      slides2[current].classList.remove('active');
    }
    slideIndex++;
    if (slideIndex > slides2.length) {slideIndex = 1}
    slides2[slideIndex - 1].classList.add('active');
  }

  setTimeout(carousel, 3000); // Change image every 3 seconds
}
