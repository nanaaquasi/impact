console.log('...Working');

ScrollReveal().reveal('.hero_section-content h1', {
  origin: 'left',
  distance: '300px',
  duration: 1200,
  opacity: 0.6,
  easing: 'cubic-bezier(0,.31,0,.89)',
});

ScrollReveal().reveal('.hero__image img', {
  // origin: 'bottom',
  scale: 0.5,
  duration: 600,
  easing: 'ease-in',
});

ScrollReveal().reveal('.hero_section-content p', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 200,
});

ScrollReveal().reveal('.hero_section-left button', {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  delay: 300,
});

ScrollReveal().reveal('.business_goals', {
  origin: 'bottom',
  distance: '100px',
  duration: 1000,
});

ScrollReveal().reveal('.business_goals > .about h3', {
  origin: 'left',
  distance: '100px',
  duration: 1500,
  delay: 100,
});

ScrollReveal().reveal('.business_goals > .about-description h2', {
  origin: 'right',
  distance: '100px',
  duration: 1500,
  delay: 200,
});

ScrollReveal().reveal('.business_goals > .about-description p', {
  origin: 'bottom',
  distance: '100px',
  duration: 1500,
  delay: 300,
});

ScrollReveal().reveal('.business_goals > .about-description button', {
  origin: 'bottom',
  distance: '100px',
  duration: 1200,
  delay: 200,
});

ScrollReveal().reveal('.first_card', {
  origin: 'left',
  distance: '100px',
  duration: 1500,
});

ScrollReveal().reveal('.second_card', {
  origin: 'bottom',
  distance: '100px',
  duration: 1500,
  delay: 100,
});

ScrollReveal().reveal('.third_card', {
  origin: 'right',
  distance: '100px',
  duration: 1500,
  delay: 200,
});
