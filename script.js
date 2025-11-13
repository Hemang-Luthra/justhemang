
// Page enter animation and nav active highlighting
document.addEventListener('DOMContentLoaded', ()=>{
  const page = document.querySelector('.page');
  if(page){
    requestAnimationFrame(()=> page.classList.add('enter'));
  }
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    if(a.getAttribute('href') === path) a.classList.add('active');
  });
});
// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}
