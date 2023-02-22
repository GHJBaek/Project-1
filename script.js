const hamburgerButton = document.querySelector('.hamburgerButton');
const hamburgerMenu = document.querySelector('.hamburgerMenu');

hamburgerButton.addEventListener('click', function (event) {
    
    hamburgerMenu.classList.toggle('open');
});
