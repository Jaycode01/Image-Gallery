const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle navigation menu on hamburger click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
