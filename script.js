
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
