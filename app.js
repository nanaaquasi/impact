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

ScrollReveal().reveal('.jumbotron', {
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

const readMoreButton = document.querySelector('.read_more');

readMoreButton.addEventListener('click', myFunction);

function myFunction() {
  const dots = document.getElementById('dots');
  const moreText = document.getElementById('more');
  const readMoreButton = document.getElementById('more_btn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    readMoreButton.innerHTML = 'Read more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    readMoreButton.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  }
}
