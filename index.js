// dark mode

const btnSwitch = document.querySelector('#switch')


btnSwitch.addEventListener('click', () => {
    const body = document.body;

    if(body.classList.contains('light')){
        body.classList.remove("light");
        body.classList.add("dark");
        btnSwitch.innerHTML = '<i class="fa-solid fa-sun"></i>';
        body.style.backgroundColor = '#202020';
        body.style.color = 'white';
        btnSwitch.style.color= "black";
        btnSwitch.style.background= "white";

    }else if (body.classList.contains('dark')){
        body.classList.remove('dark');
        body.classList.add('light');
        btnSwitch.innerHTML = '<i class="fa-solid fa-moon"></i>';
        body.style.background = '#F1F1F1';
        body.style.color = 'black';
        btnSwitch.style.background = "black";
        btnSwitch.style.color = "white";
    }
})


// scroll 
const liensNav = [...document.querySelectorAll("nav a")]
const sections = [...document.querySelectorAll("section")]
let navHeight = document.querySelector('nav').offsetHeight
// console.log(navHeight);
let sectionsPosition;

function position(){
  sectionsPosition = sections.map(section => section.offsetTop)
}
position()
//console.log(sectionsPosition);

liensNav.forEach(link => link.addEventListener("click", ScrollSmooth))

function ScrollSmooth(e){
  const linkIndex = liensNav.indexOf(e.target);
  window.scrollTo({
    top: sectionsPosition[linkIndex]- navHeight 
  })
}

window.addEventListener("resize", position)

//SLIDERS

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}