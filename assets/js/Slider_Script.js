{
  document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".Product_slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        150: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        769: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1025: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  });
}
{
  document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".review_slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        150: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        769: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1025: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  });
}
