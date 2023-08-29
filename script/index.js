const sliderMain = new Swiper('.slider_main', {
  freeMode: true,
  centeredSlides: true,
  mousewheel: true,
  parallax: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 3.5,
      spaceBetween: 60,
    },
  },
});

const sliderBg = new Swiper('.slider_bg', {
  centeredSlides: true,
  parallax: true,
  spaceBetween: 20,
  slidesPerView: 3.5,
});

sliderMain.controller.control = sliderBg;

document.querySelectorAll('.slider__item').forEach((slide) => {
  slide.addEventListener('click', () => {
    slide.classList.toggle('opened');
  });
});
