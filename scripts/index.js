var n=document.querySelector(".main-nav__toggle"),t=document.querySelector(".main-nav__close-button"),s=document.querySelector(".main-nav__list");n.onclick=function(){n.classList.add("main-nav__toggle--special"),t.classList.remove("main-nav__close-button--special"),s.classList.remove("main-nav__list--hide")};t.onclick=function(){t.classList.add("main-nav__close-button--special"),n.classList.remove("main-nav__toggle--special"),s.classList.add("main-nav__list--hide")};