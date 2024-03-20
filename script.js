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