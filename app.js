const menuBtn = document.querySelector('.hamburger')
const exitBtn = document.querySelector('.exit')
const menu = document.querySelector('.asideMenu')

menuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('toggle-menu');
})
exitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('toggle-menu');
})
