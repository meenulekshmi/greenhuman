// Features fade-in on scroll
const features = document.querySelectorAll('.feature-item');

window.addEventListener('scroll', () => {
  features.forEach(feature => {
    const top = feature.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) {
      feature.style.opacity = 1;
      feature.style.transform = 'translateY(0)';
    }
  });
});
