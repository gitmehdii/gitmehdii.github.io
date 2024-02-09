function startAnimation() {
    console.log('Animation started');
    const animationContainer = document.getElementById('animation-container');
    const xWing = document.createElement('img');
    xWing.src = 'assets/img/x_wing1.png'; // Assuming x-wing.png is your X-Wing image
    xWing.className = 'x-wing';
    
    // Remove X-Wing after animation completes
    xWing.addEventListener('transitionend', function() {
      animationContainer.removeChild(xWing);
    });
  
    animationContainer.appendChild(xWing);
  
    // Trigger reflow to restart animation
    void xWing.offsetWidth; 
  
    // Start animation by setting X-Wing's left position
    xWing.style.left = 'calc(100% + 100px)'; // Adjust 100px according to X-Wing width
  }
  