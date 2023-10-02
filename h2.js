const h2Element = document.querySelector('h2');

function runAnimation() {
  h2Element.classList.add('animate-text-active');

  // Remove the animation class after the animation completes
  setTimeout(() => {
    h2Element.classList.remove('animate-text-active');
    // Request the next animation frame
    requestAnimationFrame(runAnimation);
  }, 1000); // Delay the removal of the class to match your one-second interval
}

// Start the animation immediately
runAnimation();
