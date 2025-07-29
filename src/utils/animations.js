import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Optional ScrollSmoother initialization
export function initScrollSmoother() {
  ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1,
    effects: true,
  });
}

export function animateWithDataAttributes(selector = '.gsap-animate') {
  const groups = {};

  document.querySelectorAll(selector).forEach((el, index) => {
    const animation = el.dataset.animation ?? 'fade';
    const direction = el.dataset.direction ?? 'up';
    let duration = parseFloat(el.dataset.duration) || 1;
    let delay = el.dataset.delay ?? 0;
    const scroll = el.dataset.scroll === 'true';
    const ease = el.dataset.ease || 'power2.out';
    const repeatAttr = el.dataset.repeat;
    const hover = el.dataset.hover === 'true';
    const exit = el.dataset.exit ?? null;
    const origin = el.dataset.origin || 'center center';
    const group = el.dataset.staggerGroup;

    // ScrollReverse
    const scrollReverse = el.dataset.scrollReverse === 'true';

    // Smart delay
    if (delay === 'rand') {
      delay = Math.random();
    } else if (delay === 'index') {
      delay = index * 0.2;
    } else {
      delay = parseFloat(delay) || 0;
    }

    // Repeat
    const repeat = repeatAttr === 'true' ? -1 : isNaN(parseInt(repeatAttr)) ? 0 : parseInt(repeatAttr);

    // Set transform origin if scaling or zooming
    if ((animation === 'scale' || animation === 'zoom') && origin) {
      el.style.transformOrigin = origin;
    }

    // Prepare base animation
    const base = {
      duration,
      delay,
      ease,
      repeat,
      opacity: 0,
    };

    // Modify based on animation type
    switch (animation) {
      case 'fade':
        break;
      case 'slide':
        if (direction === 'left') base.x = -50;
        else if (direction === 'right') base.x = 50;
        else if (direction === 'up') base.y = 50;
        else if (direction === 'down') base.y = -50;
        break;
      case 'scale':
        base.scale = 0.8;
        break;
      case 'rotate':
        base.rotate = -15;
        break;
      case 'zoom':
        base.scale = 0.8;
        base.opacity = 0;
        break;
      default:
        console.warn(`Unknown animation: ${animation}`, el);
    }

    const enterAnim = () => {
      if (el.dataset.timeline === 'true') {
        const tl = gsap.timeline();
        tl.from(el, base);

        if (el.dataset.scaleAfter) {
          tl.to(el, {
            scale: parseFloat(el.dataset.scaleAfter),
            duration: 0.3,
          });
        }

        if (el.dataset.fadeAfter === 'true') {
          tl.to(el, {
            opacity: 0,
            duration: 0.3,
          });
        }

        gsap.delayedCall(delay, () => tl.play());
      } else {
        gsap.from(el, base);
      }
    };

    // Exit animation
    const exitAnim = () => {
      if (!exit) return;
      const exitBase = {
        duration,
        ease,
        opacity: 0,
      };
      if (exit === 'slide') {
        exitBase.y = 50;
      } else if (exit === 'zoom') {
        exitBase.scale = 0.8;
      } else if (exit === 'rotate') {
        exitBase.rotate = 15;
      }
      gsap.to(el, exitBase);
    };

    // Hover animation
    if (hover) {
      el.addEventListener('mouseenter', () => {
        gsap.fromTo(
          el,
          { scale: 1 },
          {
            scale: 1.1,
            duration: 0.3,
            ease: 'power1.out',
          },
        );
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          scale: 1,
          duration: 0.3,
          ease: 'power1.inOut',
        });
      });
      return;
    }

    if (group) {
      if (!groups[group]) groups[group] = [];
      groups[group].push({ el, base });
    } else if (scroll) {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        onEnter: enterAnim,
        onLeaveBack: scrollReverse ? exitAnim : undefined,
      });
    } else {
      enterAnim();
    }
  });

  // Handle staggered groups
  for (const groupName in groups) {
    const items = groups[groupName];
    const elements = items.map((i) => i.el);
    const base = items[0].base;

    gsap.from(elements, {
      ...base,
      stagger: 0.2,
    });
  }
}
