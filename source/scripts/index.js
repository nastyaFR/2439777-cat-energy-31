/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-header__nav');
const navToggle = document.querySelector('.main-header__menu-button');

navMain.classList.remove('main-header__nav--no-js');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-header__nav--closed')) {
    navMain.classList.remove('main-header__nav--closed');
    navMain.classList.add('main-header__nav--opened');
  } else {
    navMain.classList.add('main-header__nav--closed');
    navMain.classList.remove('main-header__nav--opened');
  }
});

navMain.classList.remove('main-header__nav--opened');
navMain.classList.add('main-header__nav--closed');


