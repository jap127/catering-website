// Handle form submission with a simple alert
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to server
    alert('Thank you for reaching out! We will get back to you soon.');
  });
  
  // Scroll to section when clicking on nav links
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      // Smooth scroll to the target section
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust scroll position
        behavior: 'smooth'
      });
    });
  });
  