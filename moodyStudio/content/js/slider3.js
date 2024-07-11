const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let counter = 0;
const size = 400;

function smoothScroll(targetPos) {
    slider.style.transition = "transform 0.4s ease-in-out";
    slider.style.transform = 'translateX(' + (-targetPos) + 'px)';
}

next.addEventListener('click', () => {
    if (counter >= slides.length - 3) return;
    counter++;
    smoothScroll(size * counter);
});

prev.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    smoothScroll(size * counter);
});