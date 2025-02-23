// Very basic example - you'd likely add more interactivity
console.log("Blog script loaded.");

// Example: Add a class to the header on scroll (for a sticky header effect)
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});