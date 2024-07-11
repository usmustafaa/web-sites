const slider2 = document.querySelector('.slider2') 
const left = document.getElementById('left');
const right = document.getElementById('right');
const dots2 = document.querySelectorAll('.dot2');

let currentIndex2 = 0;
let startX2 = 0;
let currentTranslate2 = 0;
let leftTranslate2 = 0;

left.addEventListener('click', () => {
  if (currentIndex2 > 0) {
    currentIndex2--;
    updateSliderPosition2();
  }
});

right.addEventListener('click', () => {
  if (currentIndex2 < slider2.children.length - 3) {
    currentIndex2++;
    updateSliderPosition2();
  }
});

slider2.addEventListener('touchstart', touchStart);
slider2.addEventListener('touchend', touchEnd);
slider2.addEventListener('touchmove', touchMove);

function touchStart(event) {
  startX2 = event.touches[0].clientX;
}

function touchEnd() {
  const movedBy2 = currentTranslate2 - leftTranslate2;
  if (movedBy2 < -100 && currentIndex2 < slider2.children.length - 3) {
    currentIndex2++;
  }
  if (movedBy2 > 100 && currentIndex2 > 0) {
    currentIndex2--;
  }
  updateSliderPosition2();
}

function touchMove(event) {
  const currentX = event.touches[0].clientX;
  currentTranslate2 = leftTranslate2 + currentX - startX2;
  slider2.style.transform = `translateX(${currentTranslate2}px)`;
}

function updateSliderPosition2() {
  currentTranslate2 = -currentIndex2 * 85;
  leftTranslate2 = currentTranslate2;
  slider2.style.transform = `translateX(${currentTranslate2}%)`;
  updateDots2();
}

function updateDots2() {
  dots2.forEach((dot2, index2) => {
    dot2.classList.toggle('bg-gray-800', index2 === currentIndex2);
    dot2.classList.toggle('bg-gray-400', index2 !== currentIndex2);
  });
}

// İlk nokta aktif
updateDots2();