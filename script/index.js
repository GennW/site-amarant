const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let totalSlides = 3;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i >= index && i < index + totalSlides) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % (slides.length - totalSlides + 1);
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + (slides.length - totalSlides + 1)) % (slides.length - totalSlides + 1);
    showSlide(currentSlide);
}

slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });

    // Добавляем обработчик touchstart для касаний на сенсорных устройствах
    slide.addEventListener('touchstart', (event) => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

showSlide(currentSlide);

const yaerElement = document.getElementById('footer-year');
const currentYear = new Date().getFullYear();
if (yaerElement) {
    yaerElement.textContent = currentYear;
}


window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (window.scrollY > 0) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
     // Проверка, достигнут ли конец страницы
     if (scrollPosition >= documentHeight) {
        header.classList.add('hidden'); // Скрываем хедер
    } else {
        header.classList.remove('hidden'); // Показываем хедер
    }
});


// yandex map set
// var myMap;

// ymaps.ready(init);

// function init () {
//     myMap = new ymaps.Map('map', {
//         // Санкт-Петербург
//         center: [59.93772, 30.313622],
//         zoom: 10
//     }, {
//         searchControlProvider: 'yandex#search'
//     });

//     myMap.behaviors
//         // Отключаем часть включенных по умолчанию поведений:
//         //  - drag - перемещение карты при нажатой левой кнопки мыши;
//         //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
//         .disable(['scrollZoom', 'drag', 'rightMouseButtonMagnifier'])
//         // Включаем линейку.
//         .enable('ruler');

//     // Изменяем свойство поведения с помощью опции:
//     // изменение масштаба колесом прокрутки будет происходить медленно,
//     // на 1/2 уровня масштабирования в секунду.
//     myMap.options.set('scrollZoomSpeed', 0.5);
// }