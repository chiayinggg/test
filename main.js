let slideIndex = [1,1,1,1];
let slideId = ["slide_a", "slide_b", "slide_c", "slide_d"]

window.onload = function() {
    showSlides(0,1);
    showSlides(1,1);
    showSlides(2,1);
    showSlides(3,1);

    const menuControl = document.getElementById('menu_control');

    menuControl.addEventListener('change', function(){
      if (this.checked) {
        document.body.classList.add('stop-scrolling');
      }
      else {
        document.body.classList.remove('stop-scrolling');
      }
    });
};

function Plus(s, n) {
  showSlides(s, slideIndex[s] += n);
}

function Current(s, n) {
  showSlides(s, slideIndex[s] = n);
}

function showSlides(s,n) {
  let i;
  let slides = document.getElementsByClassName(slideId[s]);
  let dotContainers = document.getElementsByClassName("dot-container")
  let dots = dotContainers[s].getElementsByClassName("dot");

  if (n > slides.length) {slideIndex[s] = 1}    
  if (n < 1) {slideIndex[s] = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex[s]-1].style.display = "block";  
  dots[slideIndex[s]-1].className += " active";
}
