// Get the burger and nav elements
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

// Add an event listener to the burger element
burger.addEventListener('click', () => {
  // Toggle the 'show' class on the nav element
  nav.classList.toggle('show');
  
  // Toggle the 'active' class on the burger element
  burger.classList.toggle('active');
});