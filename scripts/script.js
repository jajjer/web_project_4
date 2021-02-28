const profileButton = document.querySelector(".profile__button");
const popupOpened = document.querySelector(".popup_opened");
const popupClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const popupSave = document.querySelector(".popup__save");


function openPopup() {
    popup.classList.add('popup_opened')
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

function savePopup() {
    popupSave.querySelector('popup__profile_name').value;

}


const formElement = document.querySelector('.popup__form');

function handleFormSubmit(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector('popup__profile_name').value;
    let jobInput = document.querySelector('popup__profile_about').value;
    //let profileName = document.querySelector('profile__title')


    nameInput.textContent = document.querySelector('profile__title');
    document.querySelector('profile__subtitle') = jobInput.textContent;
}

profileButton.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);
popupSave.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);