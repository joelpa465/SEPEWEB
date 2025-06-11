import React, { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, animation = 'fade-up', delay = 0 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            switch (animation) {
              case 'fade-up':
                entry.target.classList.add('translate-y-10', 'opacity-0');
                setTimeout(() => {
                  entry.target.classList.remove('translate-y-10', 'opacity-0');
                }, delay);
                break;
              case 'fade-left':
                entry.target.classList.add('-translate-x-10', 'opacity-0');
                setTimeout(() => {
                  entry.target.classList.remove('-translate-x-10', 'opacity-0');
                }, delay);
                break;
              case 'fade-right':
                entry.target.classList.add('translate-x-10', 'opacity-0');
                setTimeout(() => {
                  entry.target.classList.remove('translate-x-10', 'opacity-0');
                }, delay);
                break;
              case 'zoom':
                entry.target.classList.add('scale-95', 'opacity-0');
                setTimeout(() => {
                  entry.target.classList.remove('scale-95', 'opacity-0');
                }, delay);
                break;
              default:
                setTimeout(() => {
                  entry.target.classList.remove('opacity-0');
                }, delay);
            }
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      currentElement.classList.add('opacity-0', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [animation, delay]);

  return (
    <div ref={elementRef} className="w-full">
      {children}
    </div>
  );
}