const swiper = new Swiper('.swiper', {
  loop: true,

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 22
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 22
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

window.onscroll = function () { myFunction() };

var header = document.getElementById("navbar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
