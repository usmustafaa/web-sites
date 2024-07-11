const slider = document.querySelector('.slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

prev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

next.addEventListener('click', () => {
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
    updateSliderPosition();
  }
});

slider.addEventListener('touchstart', touchStart);
slider.addEventListener('touchend', touchEnd);
slider.addEventListener('touchmove', touchMove);

function touchStart(event) {
  startX = event.touches[0].clientX;
}

function touchEnd() {
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -100 && currentIndex < slider.children.length - 1) {
    currentIndex++;
  }
  if (movedBy > 100 && currentIndex > 0) {
    currentIndex--;
  }
  updateSliderPosition();
}

function touchMove(event) {
  const currentX = event.touches[0].clientX;
  currentTranslate = prevTranslate + currentX - startX;
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

function updateSliderPosition() {
  currentTranslate = -currentIndex * 100;
  prevTranslate = currentTranslate;
  slider.style.transform = `translateX(${currentTranslate}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('bg-gray-800', index === currentIndex);
    dot.classList.toggle('bg-gray-400', index !== currentIndex);
  });
}

// İlk nokta aktif
updateDots();