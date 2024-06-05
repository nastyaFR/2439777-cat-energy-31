/* в этот файл добавляет скрипты*/
const burgerButton = document.querySelector ('.main-nav__toggle');
const closeButton = document.querySelector ('.main-nav__close-button');
const navList = document.querySelector ('.main-nav__list');

burgerButton.onclick = function () {
  burgerButton.classList.add ('main-nav__toggle--special');
  closeButton.classList.remove ('main-nav__close-button--special');
  navList.classList.remove ('main-nav__list--hide');
};
closeButton.onclick = function () {
  closeButton.classList.add ('main-nav__close-button--special');
  burgerButton.classList.remove ('main-nav__toggle--special');
  navList.classList.add ('main-nav__list--hide');
};
