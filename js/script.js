/*Свайпер*/ 
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

/*Ссылка по якорю*/
const anchors = document.querySelectorAll('a.to-order')

for(let anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    event.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

/*Модальное окно*/
const modalWindow = document.querySelector('.feedback__modal');
const popup = document.querySelector('.feedback__section');
const openPopupButton = document.querySelector('.connect-us');
const closePopupButton = popup.querySelector('.feedback-exit-button');

openPopupButton.addEventListener('click', function(event) {
  event.preventDefault();
  modalWindow.classList.add('active')
  popup.classList.add('active')
})

closePopupButton.addEventListener('click', function() {
  modalWindow.classList.remove('active')
  popup.classList.remove('active')
})
