// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Product card hover animation already handled by CSS
// Optional: Add dynamic "back to top" button
const backToTop = document.createElement('button');
backToTop.innerText = "↑ Top";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 15px;
  background: #0077cc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: none;
  z-index: 1000;
`;

window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});