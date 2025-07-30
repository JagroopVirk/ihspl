// GsapInit.jsx
import { useEffect } from 'react';
import { animateWithDataAttributes, initScrollSmoother } from '@/utils/animations';

export default function GsapInit() {
  useEffect(() => {
    initScrollSmoother();
    animateWithDataAttributes();
  }, []);
  return null;
}

// document.body.classList.remove('preload');
// gsap.to('body', {
//   opacity: 1,
//   duration: 0.8,
//   ease: 'power2.out',
// });
