// main.js — mobile nav + small helpers
document.addEventListener('DOMContentLoaded', function () {
  // year footer(s)
  const y = new Date().getFullYear();
  ['year','year-2','year-3','year-4','year-5'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  // mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      toggle.classList.toggle('open');
    });
  }

  // mark active nav link (based on current file)
  const links = document.querySelectorAll('.nav a');
  const path = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });
});
