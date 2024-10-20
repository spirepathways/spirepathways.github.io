// Scroll to section when buttons are clicked
document.querySelector('.primary-btn').addEventListener('click', function() {
    window.scrollTo({
      top: document.querySelector('.about-section').offsetTop,
      behavior: 'smooth'
    });
  });
  
  document.querySelector('.secondary-btn').addEventListener('click', function() {
    window.scrollTo({
      top: document.querySelector('.learn-more-section').offsetTop,
      behavior: 'smooth'
    });
  });
  