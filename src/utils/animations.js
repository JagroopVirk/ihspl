import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  const animations = [
    { selector: '.fade-in', config: { y: 40, opacity: 0, ease: 'power2.out' } },
    { selector: '.slide-left', config: { x: 100, opacity: 0, ease: 'back.out(1.7)' } },
    { selector: '.slide-right', config: { x: -100, opacity: 0, ease: 'back.out(1.7)' } },
    { selector: '.slide-up', config: { y: 100, opacity: 0, ease: 'circ.out' } },
    { selector: '.slide-down', config: { y: -100, opacity: 0, ease: 'circ.out' } },
    { selector: '.zoom-in', config: { scale: 0.8, opacity: 0, ease: 'elastic.out(1, 0.5)' } },
    { selector: '.zoom-out', config: { scale: 1.2, opacity: 0, ease: 'elastic.out(1, 0.5)' } },
    { selector: '.rotate-in', config: { rotation: 45, opacity: 0, ease: 'expo.out' } },
    { selector: '.flip-x', config: { rotationX: 90, opacity: 0, ease: 'sine.out' } },
    { selector: '.flip-y', config: { rotationY: 90, opacity: 0, ease: 'sine.out' } },
    { selector: '.bounce-in', config: { y: 100, opacity: 0, ease: 'bounce.out' } },
    { selector: '.skew-in', config: { skewY: 10, opacity: 0, ease: 'power1.out' } },
    { selector: '.scale-rotate', config: { scale: 0.5, rotation: 90, opacity: 0, ease: 'expo.out' } },
    { selector: '.blur-in', config: { opacity: 0, filter: 'blur(10px)', ease: 'power2.out' } },
    { selector: '.stagger-list', config: { y: 20, opacity: 0, stagger: 0.1, ease: 'power3.out' } },
  ];

  animations.forEach(({ selector, config }) => {
    gsap.utils.toArray(selector).forEach((el) => {
      const scrollTrigger = {
        trigger: el,
        start: el.dataset.start || 'top bottom',
        end: el.dataset.end || undefined,
        toggleActions: el.dataset.toggle || 'play none none none',
      };

      gsap.from(el, {
        ...config,
        opacity: config.opacity ?? 0,
        duration: parseFloat(el.dataset.duration) || 1,
        delay: parseFloat(el.dataset.delay) || 0,
        ease: el.dataset.ease || config.ease || 'power2.out',
        stagger: config.stagger || 0.2,
        scrollTrigger,
      });
    });
  });

  // Additional effects
  gsap.utils.toArray('.hover-scale').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      gsap.to(el, { scale: 1.2, duration: 0.05, ease: 'power2.out', transformOrigin: 'left' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { scale: 1, duration: 0.1, ease: 'elastic.out(1, 0.5)' });
    });
  });

  gsap.utils.toArray('.click-expand').forEach((el) => {
    el.addEventListener('click', () => {
      gsap.to(el, { height: 'auto', duration: 0.5, ease: 'power2.inOut' });
    });
  });

  gsap.utils.toArray('.parallax-bg').forEach((el) => {
    gsap.to(el, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  // Optional timeline example
  const tl = document.querySelector('.timeline-section');
  if (tl) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: tl,
          start: 'top 80%',
        },
      })
      .from('.step-1', { opacity: 0, x: -50, duration: 0.6 })
      .from('.step-2', { opacity: 0, x: 50, duration: 0.6 }, '-=0.4')
      .from('.step-3', { opacity: 0, scale: 0.8, duration: 0.6 }, '-=0.4');
  }

  window.addEventListener('load', () => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  });
}
