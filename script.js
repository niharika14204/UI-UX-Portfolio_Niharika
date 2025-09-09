const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const dots = Array.from(document.querySelectorAll('.carousel-dot'));
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Function to move to a specific slide
function goToSlide(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  currentIndex = index;
}

// Prev/Next Buttons
prevBtn.addEventListener('click', () => {
  const newIndex = (currentIndex - 1 + slides.length) % slides.length;
  goToSlide(newIndex);
});

nextBtn.addEventListener('click', () => {
  const newIndex = (currentIndex + 1) % slides.length;
  goToSlide(newIndex);
});

// Dots Navigation
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => goToSlide(i));
});

// Auto Slide
setInterval(() => {
  const newIndex = (currentIndex + 1) % slides.length;
  goToSlide(newIndex);
}, 4000); // Change slide every 4 seconds
