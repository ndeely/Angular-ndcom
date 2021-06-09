var slideIndex = 0;
setTimeout(carousel, 1000);

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (x.length !== 0) {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
  }
  setTimeout(carousel, 3000); // Change image every 3 seconds
}
