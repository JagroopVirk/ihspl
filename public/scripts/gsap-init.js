import { initScrollAnimations } from '/src/utils/animations.js';

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    initScrollAnimations();
    ScrollTrigger.refresh();
  }, 100); // tweak time if needed
});
