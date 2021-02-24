const profileButton = document.querySelector(".profile__button");
const popupHidden = document.querySelector(".popup_hidden");
const popupClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const popupSave = document.querySelector(".popup__save");
const formElement = document.querySelector('popup__form');

function openPopup() {
    popupHidden.classList.add('popup')
}

function closePopup() {
    popupHidden.classList.remove('popup')
}

function savePopup() {
    popupSave.querySelector('popup__profile_name').value;

}

function handleFormSubmit(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector('popup__profile_name').value
    let jobInput = document.querySelector('popup__profile_about').value

    document.querySelector('profile__title').value = nameInput;
    document.querySelector('profile__subtitle').value = jobInput;
}

profileButton.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);
popupSave.addEventListener("click", closePopup);
formElement.addEventListener('submit', handleFormSubmit);