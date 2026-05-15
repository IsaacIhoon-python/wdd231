const hamBtn = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

hamBtn.addEventListener('click', () => {
    navBar.classList.toggle('show');
    hamBtn.classList.toggle('show');
});