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

/*Маска телефона*/

document.addEventListener('DOMContentLoaded', function() {
            const phoneInput = document.getElementById('phone');

            phoneInput.addEventListener('input', function () {
                let value = this.value.replace(/\D/g, ''); // Убираем все нецифровые символы
                if (value.length > 11) {
                    value = value.slice(0, 11); // Ограничиваем до 10 цифр
                }

                const maskedValue = createPhoneMask(value);
                this.value = maskedValue;
            });

            function createPhoneMask(value) {
                const countryCode = '+7 ';
                const areaCode = value.length > 1 ? `(${value.slice(1, 4)}) ` : `(${value.slice(1)}`;
                const nextThree = value.length > 4 ? `${value.slice(4, 7)}-` : '';
                const nextTwo = value.length > 7 ? `${value.slice(7, 9)}-` : '';
                const lastTwo = value.length > 9 ? `${value.slice(9, 11)}` : '';

                // Форматируем окончательный номер
                return countryCode + areaCode + nextThree + nextTwo + lastTwo;
            }
        });
