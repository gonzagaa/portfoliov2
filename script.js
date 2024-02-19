window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showButtonHomeOnScroll()
}

function showButtonHomeOnScroll() {
    if(scrollY > 200) {
        document.querySelector("#buttonHome").classList.add("show")
    } else {
        document.querySelector("#buttonHome").classList.remove("show")
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal().reveal('#home h1, #home p', { distance: '400px', origin: 'top', duration: 500, easing: 'ease-in-out', delay: 200});
ScrollReveal().reveal('.social-links .in', { distance: '400px', origin: 'top', duration: 500, easing: 'ease-in-out', delay: 0});
ScrollReveal().reveal('.social-links .git', { distance: '400px', origin: 'top', duration: 500, easing: 'ease-in-out', delay: 100});
ScrollReveal().reveal('.social-links .ig', { distance: '400px', origin: 'top', duration: 500, easing: 'ease-in-out', delay: 200});

ScrollReveal().reveal('#projects .left, header h2, header p, #sobre .image, #projects .right, #sobre .text', { distance: '400px', origin: 'bottom', duration: 500, easing: 'ease-in-out'});

ScrollReveal().reveal('#competenciasDesktop .one', { distance: '400px', origin: 'top', duration: 500, easing: 'ease-in-out', mobile: false, delay: 50});
ScrollReveal().reveal('#competenciasDesktop .two', { distance: '400px', origin: 'top', duration: 500, easing: 'ease-in-out', mobile: false, delay: 150});
ScrollReveal().reveal('#competenciasDesktop .three', { distance: '400px', origin: 'top', duration: 500, easing: 'ease-in-out', mobile: false, delay: 250});
ScrollReveal().reveal('#competenciasDesktop .for', { distance: '400px', origin: 'top', duration: 500, easing: 'ease-in-out', mobile: false, delay: 350});


var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-120%", 0, -500],
        },
        next: {
          shadow: true,
          translate: ["120%", 0, -500],
        },
      },
  });