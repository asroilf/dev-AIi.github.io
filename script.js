let slideIndex = 0;
carousel();

function slide() {
  let i;
  let a = document.getElementsByClassName("hoc_pic");
  for (i = 0; i < a.length; i++) {
    a[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > a.length) {slideIndex = 1}
  a[slideIndex-1].style.display = "block";
  setTimeout(slide, 2000); // Change image every 2 seconds
}
