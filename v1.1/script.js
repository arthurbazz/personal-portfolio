// Variable declaration
const toggleBtn = document.querySelector('.toggle-btn');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('nav-link').forEach(l => 
    l.addEventListener('click', () => {
        toggleBtn.classList.remove('active');
        navMenu.classList.remove('active');
}))