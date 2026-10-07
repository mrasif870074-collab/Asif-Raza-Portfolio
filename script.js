document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => document.querySelector('.nav-links').classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();
