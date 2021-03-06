document.querySelectorAll('.read_more').forEach(readMoreButton =>
  readMoreButton.addEventListener('click', function () {
    const [dots, moreText] = this.previousElementSibling.children;

    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      moreText.style.display = 'none';
      this.innerHTML = 'Read more';
    } else {
      dots.style.display = 'none';
      moreText.style.display = 'inline';
      this.innerHTML = 'Read less';
    }
  })
);

ScrollReveal().reveal('.hero_section-content h1', { mobile: false }, {
  origin: 'left',
  distance: '300px',
  duration: 1200,
  opacity: 0.6,
  easing: 'cubic-bezier(0,.31,0,.89)',
});

ScrollReveal().reveal('.hero__image img', { mobile: false }, {
  // origin: 'bottom',
  scale: 0.5,
  duration: 600,
  easing: 'ease-in',
});

ScrollReveal().reveal('.hero_section-content p', { mobile: false }, {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 200,
});

ScrollReveal().reveal('.hero_section-left button', { mobile: false }, {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  delay: 300,
});

ScrollReveal().reveal('.business_goals', { mobile: false }, {
  origin: 'bottom',
  distance: '100px',
  duration: 1000,
});

ScrollReveal().reveal('.business_goals > .about h3', { mobile: false }, {
  origin: 'left',
  distance: '100px',
  duration: 1500,
  delay: 100,
});

ScrollReveal().reveal('.business_goals > .about-description h2', { mobile: false }, {
  origin: 'right',
  distance: '100px',
  duration: 1500,
  delay: 200,
});

ScrollReveal().reveal('.business_goals > .about-description p', { mobile: false }, {
  origin: 'bottom',
  distance: '100px',
  duration: 1500,
  delay: 300,
});

ScrollReveal().reveal('.business_goals > .about-description button', { mobile: false }, {
  origin: 'bottom',
  distance: '100px',
  duration: 1200,
  delay: 200,
});

ScrollReveal().reveal('.first_card', { mobile: false }, { mobile: false }, {
  origin: 'left',
  distance: '100px',
  duration: 1500,
});

ScrollReveal().reveal('.second_card', { mobile: false }, {
  origin: 'bottom',
  distance: '100px',
  duration: 1500,
  delay: 100,
});

ScrollReveal().reveal('.third_card', { mobile: false }, {
  origin: 'right',
  distance: '100px',
  duration: 1500,
  delay: 200,
});

ScrollReveal().reveal('.jumbotron', { mobile: false }, {
  scale: 0.8,
  duration: 400,
  easing: 'ease-in',
});

ScrollReveal().reveal('.ceo_profile-image', {
  origin: 'bottom',
  duration: 800,
  easing: 'ease-out',
});

ScrollReveal().reveal('.other_teams-profile', {
  origin: 'right',
  duration: 800,
  easing: 'ease-in',
});

ScrollReveal().reveal('.other_teams-profile:nth-child(2)', {
  origin: 'bottom',
  duration: 800,
  delay: 100,
  easing: 'ease-in',
});

ScrollReveal().reveal('.other_teams-profile:nth-child(3)', {
  origin: 'bottom',
  duration: 800,
  delay: 200,
  easing: 'ease-in',
});

ScrollReveal().reveal('.ceo_profile-right', {
  origin: 'left',
  duration: 800,
  delay: 100,
  easing: 'ease-in',
});

ScrollReveal().reveal('.ceo_profile-header h2', {
  origin: 'right',
  duration: 800,
  delay: 100,
  easing: 'ease-in',
});

new Splide('.splide', {
  type: 'loop',
  autoplay: true,
}).mount();

