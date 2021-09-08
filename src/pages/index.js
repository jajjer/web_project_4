//import styles
import "../pages/index.css";

//import hard coded images
import "../images/Cousteau.jpg";
import "../images/filledblackheart.svg";

//import components
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import { elementList, profileButton, addFormElement, addButton, profileTitle, profileSubtitle, nameInput, jobInput } from '../utils/constants.js';

// ===== 
// Wrappers 
// ===== 

const formElement = document.querySelector(".popup__content");



// ===== 
//Buttons & DOM elements 
// ===== 

const popupEditSave = document.querySelector(".popup__button_type_edit");
const popupAddSave = document.querySelector(".popup__button_type_add");


// ===== 
//Different popups 
// ===== 
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");

const popupElement = document.querySelector(".popup");

const popupPicture = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");


const cardSelector = document.querySelector(".template__photo");
//'#template__photo';


const cardTemplate = document.querySelector(".template__photo").content.querySelector(".element__item");

// ====
//Validation
// ====
const validationSettings = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonSelector: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
};

const popupEditValidator = new FormValidator(validationSettings, popupEdit);
const popupNewCardValidator = new FormValidator(validationSettings, popupNewCard);

popupEditValidator.enableValidation();
popupNewCardValidator.enableValidation();

// ===== 
//Close buttons for different popups 
// ===== 
const closeEditButton = popupEdit.querySelector('.popup__close');
const closeNewCardButton = popupNewCard.querySelector('.popup__close');
const closeImageButton = popupImage.querySelector('.popup__close');

// ===== 
// Element items 
// ===== 

const likeButtonActive = document.querySelector(".element__button_active");
const elementTitle = document.querySelector(".element__title");
const elementImage = document.querySelector(".element__image");

const initialCards = [{
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];

function renderCard(data, cardSelector) {
    const card = new Card(data, cardSelector)
    elementList.prepend(card.getView());
};

//render first 6 cards
initialCards.forEach((card) => {
    renderCard(card, cardTemplate)
});

//create new cards
function addCard(evt) {
    evt.preventDefault();
    const titleInput = popupNewCard.querySelector(".popup__input_type_card-name");
    const imageInput = popupNewCard.querySelector(".popup__input_type_url");

    renderCard({ name: titleInput.value, link: imageInput.value }, cardTemplate);
    closePopup(popupNewCard);
};

//Close Popup

const handleEsc = (evt) => {
    //console.log('handleEsc ran')
    if (evt.key === 'Escape') {
        // find open popup
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
};

function handleOverlayClick(e) {
    if (e.target.classList.contains("popup_opened")) {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
}

// ===== 
// Handlers 
// ===== 
function handleEditFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(popupEdit);
}

// ===== 
// Event listeners 
// ===== 

function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener('keyup', handleEsc);
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keyup", handleEsc);
}


popupPicture.addEventListener('click', () => {
    openPopup(popupImage);
})

profileButton.addEventListener("click", () => {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    openPopup(popupEdit);

});

closeEditButton.addEventListener("click", () => {
    closePopup(popupEdit);
});

popupEdit.addEventListener("submit", handleEditFormSubmit);

addButton.addEventListener("click", () => {
    openPopup(popupNewCard);
});

closeNewCardButton.addEventListener("click", () => {
    closePopup(popupNewCard);
});

popupNewCard.addEventListener("submit", addCard);

closeImageButton.addEventListener("click", () => {
    closePopup(popupImage);
});

// Overlay Click
popupEdit.addEventListener('click', handleOverlayClick);
popupNewCard.addEventListener('click', handleOverlayClick);
popupImage.addEventListener('click', handleOverlayClick);