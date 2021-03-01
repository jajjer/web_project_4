const profileButton = document.querySelector(".profile__button");
const popupOpened = document.querySelector(".popup_opened");
const popupClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const popupSave = document.querySelector(".form__save");
const formElement = document.querySelector(".form");
const nameInput = document.querySelector(".form__input_name");
const jobInput = document.querySelector(".form__input_about");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");


function openPopup() {
    popup.classList.add('popup_opened')
}

function closePopup() {
    popup.classList.remove('popup_opened')
}


function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup();
}

profileButton.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);