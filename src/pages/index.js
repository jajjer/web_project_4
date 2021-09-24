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

const editPopup = new PopupWithForm({
    popupElement: 'popup_type_edit',
    handleFormSubmit: (data) => {
        renderCard({ name: data.name, link: data.link }, cardTemplate);
        editPopup.close();
    }
});

const newCardPopup = new PopupWithForm({
    popupElement: 'popup_type_new-card',
    handleFormSubmit: (data) => {
        renderCard({ name: data.name, link: data.link }, cardTemplate);
        newCardPopup.close();
    }
})

const imagePopup = new PopupWithImage("popup_type_image");

/*const infoUser = new UserInfo();*/

editPopup.setEventListeners();
newCardPopup.setEventListeners();
imagePopup.setEventListeners();
/*infoUser.setEventListeners();*/

function renderCard(data, cardSelector, handleCardClick) {
    const card = new Card(data, '.template__photo')
    elementList.prepend(card.getView());
};

//render first 6 cards
/*initialCards.forEach((card) => {
    renderCard(card, cardTemplate)
});*/

profileButton.addEventListener("click", () => {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    //open(popupEdit);
    editPopup.open();

});

addButton.addEventListener("click", () => {
    //open(popupNewCard);
    newCardPopup.open();
});

popupPicture.addEventListener("click", () => {
    //open(popupImage);
    imagePopup.open();
})