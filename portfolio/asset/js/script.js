// Ajoutez ces scripts pour changer la couleur du fond en fonction du défilement
document.addEventListener("DOMContentLoaded", function () {
    const backgroundAnimation = document.querySelector('.background-animation');
  
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
  
      // Changez les couleurs en fonction de la position du défilement
      if (scrollPosition % 2 === 0) {
        backgroundAnimation.style.background = 'linear-gradient(45deg, #121212, #050a2e)';
      } else {
        backgroundAnimation.style.background = 'linear-gradient(45deg, #050a2e, #121212)';
      }
    });
  });