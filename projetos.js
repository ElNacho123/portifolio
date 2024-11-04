

function displayblock(){
    document.getElementById("centrall").classList.toggle("teste")
    main.classList.toggle("menu")
}


function trocar(){

    document.getElementById("main").classList.toggle("dark2")
    document.getElementById("nav").classList.toggle("dark-nav")
    document.getElementById("body").classList.toggle("dark")
 
        document.getElementById("link").classList.toggle("dark2")
        document.getElementById("link2").classList.toggle("dark2")
        document.getElementById("link3").classList.toggle("dark2")
     
    
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

// Mostra o primeiro slide inicialmente
showSlide(currentSlide);
   
   

