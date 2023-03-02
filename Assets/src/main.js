// Get all the slide elements
const slides = document.querySelectorAll(".slide");

// Get all the dot elements
const dots = document.querySelectorAll(".dot");

// Set a variable to keep track of the current slide
let currentSlide = 0;

// Show the first slide
slides[currentSlide].classList.add("active");
dots[currentSlide].classList.add("active");

// Create a function to show the next slide
function nextSlide() {
  // Remove the active class from the current slide
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");

  // Increment the current slide
  currentSlide++;

  // If we've reached the end of the slides, go back to the beginning
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // Show the next slide
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

// Create an interval to automatically show the next slide every 5 seconds
// Change the timing (in milliseconds) to adjust the interval duration
setInterval(nextSlide, 5000);

// Add event listeners to the dots to allow manual navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    // Remove the active class from the current slide and dot
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");
    // Set the current slide to the clicked dot's index
    currentSlide = index;

    // Show the new slide and dot
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  });
});
