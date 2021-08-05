const nav = document.querySelector('.nav');
const navOpen = document.querySelector('.nav-icon-open');
const navLinks = document.querySelector('.nav-links');

navOpen.addEventListener('click', () => {
    if(window.innerWidth <= 550){
       nav.classList.toggle('mobile');
       navLinks.classList.toggle('mobile-links');
    }

    if(navOpen) {
        
    }
})