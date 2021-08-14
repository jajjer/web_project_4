import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

// ===== 
// Wrappers 
// ===== 
const editFormElement = document.querySelector(".popup__form_type_edit");
const addFormElement = document.querySelector(".popup__form_type_add");
const formElement = document.querySelector(".popup__content");



// ===== 
//Buttons & DOM elements 
// ===== 
const profileButton = document.querySelector(".profile__button");
const popupEditSave = document.querySelector(".popup__button_type_edit");
const popupAddSave = document.querySelector(".popup__button_type_add");
const addButton = document.querySelector(".profile__add-button");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");


// ===== 
//Different popups 
// ===== 
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");

const popup = document.querySelector(".popup");

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
    inactiveButtonClass: "popup__button_disabled",
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
// Form data 
// ===== 
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");




// ===== 
// Element items 
// ===== 

const likeButtonActive = document.querySelector(".element__button_active");
const elementTitle = document.querySelector(".element__title");
const elementImage = document.querySelector(".element__image");
const elementList = document.querySelector(".element");

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
    togglePopup(popupNewCard);
};

//Close Popup

window.addEventListener('keyup', (evt) => {
    if (evt.key === 'Escape') {
        togglePopup();
    }
});

// ===== 
// Handlers 
// ===== 
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    togglePopup(popupEdit);
}

// ===== 
// Event listeners 
// ===== 
function togglePopup(popup) {
    popup.classList.toggle("popup_opened");

    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}

popupPicture.addEventListener('click', () => {
    togglePopup(popupImage);
})

/*popupImage.addEventListener('click', () => {
    togglePopup(popupImage);
});*/

profileButton.addEventListener("click", () => {
    togglePopup(popupEdit);

});

closeEditButton.addEventListener("click", () => {
    togglePopup(popupEdit);
});

popupEdit.addEventListener("submit", handleFormSubmit);

addButton.addEventListener("click", () => {
    togglePopup(popupNewCard);
});

closeNewCardButton.addEventListener("click", () => {
    togglePopup(popupNewCard);
});

popupNewCard.addEventListener("submit", addCard);

closeImageButton.addEventListener("click", () => {
    togglePopup(popupImage);
});