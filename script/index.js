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
