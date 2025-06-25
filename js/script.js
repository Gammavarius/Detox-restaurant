const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  initialSlide: 1,
})

const modalWindow = document.querySelector('.feedback__modal');
const connectButton = document.querySelector('.connect-us')
