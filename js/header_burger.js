const burger = document.querySelector('.header-burger');
const navList = document.querySelector('.header-nav-ul');

burger.addEventListener('click', () => {
    burger.classList.toggle('header-burger-active');

    navList.classList.toggle('header-nav-ul-disabled');
    navList.classList.toggle('header-nav-ul-active');
});