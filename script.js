const profile__button = document.querySelector(".profile__button");
const popup_opened = document.querySelector(".popup_opened");
const popup__close = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

profile__button.addEventListener("click", function() { popup_opened.style.display = "block" });
profile__close.addEventListener("click", function() { popup_opened.display = "none" });