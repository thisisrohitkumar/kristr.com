let slideIndexp = 1;
showSlidesp(slideIndexp);

// Next/previous controls
function plusSlidesp(n) {
  showSlidesp(slideIndexp += n);
}

// Thumbnail image controls
function currentSlidep(n) {
  showSlidesp(slideIndexp = n);
}

function showSlidesp(n) {
  let i;
  let slidesp = document.getElementsByClassName("mySlidesp");
  let dotsp = document.getElementsByClassName("demop");
  let captionTextp = document.getElementById("captionp");
  if (n > slidesp.length) {slideIndexp = 1}
  if (n < 1) {slideIndexp = slidesp.length}
  for (i = 0; i < slidesp.length; i++) {
    slidesp[i].style.display = "none";
  }
  for (i = 0; i < dotsp.length; i++) {
    dotsp[i].className = dotsp[i].className.replace(" activep", "");
  }
  slidesp[slideIndexp-1].style.display = "block";
  dotsp[slideIndexp-1].className += " activep";
  captionTextp.innerHTML = dotsp[slideIndexp-1].alt;
}