import { useEffect } from 'react';

const ParticlesBackground = () => {

  useEffect(() => {
    // Load particles.js script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize particles.js
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 100, 
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 1,
              color: '#000000',
            },
          },
          opacity: {
            value: 2,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 1,
            random: true,
            anim: {
              enable: false,
              speed: 10,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse', // Enable repulse effect on hover
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100, // Adjust repulsion distance
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: false,
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
     
      <div 
        id="particles-js" 
        className="absolute inset-0 bg-gray-900"
        style={{ zIndex: 1, pointerEvents: 'auto' }}
      />
  );
};

export default ParticlesBackground;