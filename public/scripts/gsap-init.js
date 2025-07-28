import { initScrollAnimations } from '/src/utils/animations.js';

function initializeAnimations() {
  setTimeout(() => {
    initScrollAnimations();
    ScrollTrigger.refresh();
  }, 100);
}

// Run animations after Astro component hydration
document.addEventListener('astro:after-swap', initializeAnimations);

// Fallback: Run on DOMContentLoaded for non-Astro pages or initial load
document.addEventListener('DOMContentLoaded', initializeAnimations);
