// =====
// Wrappers
// =====
const editFormElement = document.querySelector(".popup__form_type_edit");
const addFormElement = document.querySelector(".popup__form_type_add");



// =====
//Buttons & DOM elements
// =====
const profileButton = document.querySelector(".profile__button");
const popupEditSave = document.querySelector(".popup__button_type_edit");
const popupAddSave = document.querySelector(".popup__button_type_add")


//const closeImageButton = popupImage.querySelector('.popup__close');
const addButton = document.querySelector(".profile__add-button");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");



// =====
//Different popups
// =====
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");

const popupPicture = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");

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
const titleInput = document.querySelector(".popup__input_type_card-name");
const imageInput = document.querySelector(".popup__input_type_url");



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

function createCard(card) {
    const cardTemplate = document.querySelector("#template__photo").content.querySelector(".element__item");
    //clone the template
    const cardElement = cardTemplate.cloneNode(true);

    // query name element
    const cardImage = cardElement.querySelector(".element__image");

    //query image element
    const cardTitle = cardElement.querySelector(".element__title").textContent = card.name;
    // set values of name and image
    cardImage.style.backgroundImage = `url(${card.link})`;
    // add event listeners
    cardImage.addEventListener("click", () => {
        toggleImage(popupImage);
        popupPicture.src = card.link;
        popupCaption.textContent = card.name;
    });


    // element items
    const likeButton = cardElement.querySelector(".element__button");
    const deleteButton = cardElement.querySelector(".element__trash");
    const trashWrapper = cardElement.querySelector(".element__container");

    likeButton.addEventListener("click", (e) =>
        likeButton.classList.toggle("element__button_active")
    );

    deleteButton.addEventListener("click", (e) =>
        trashWrapper.parentElement.remove()
    );

    return cardElement;
};

function renderCard(card, elementList) {
    elementList.append(createCard(card));
};

initialCards.forEach(card => {
    renderCard(card, elementList)
});

//function addCard() {
//  const cardTemplate = document.querySelector("#template__photo").content.querySelector(".element__item");

//const cardElement = cardTemplate.cloneNode(true);
//const cardImage = cardElement.querySelector(".element__image");
//const cardTitle = cardElement.querySelector(".element__title");

//newCard.name = addTitle.value;
//newCard.link = addImage.value;

//return cardElement;
//}

//function renderAddCard(card, elementList) {
//  elementList.prepend(addCard(card));
//};

//initialCards.forEach(card => {
//  renderAddCard(card, elementList)
//});

function addCard(evt) {
    evt.preventDefault();
    const newCard = { name: "", link: "" };
    newCard.name = titleInput.value;
    newCard.link = imageInput.value;

    //return addCard;

    //renderCard(newCard, elementList);

    //initialCards.prepend(newCard, elementList);
    renderCard(newCard, elementList);
    toggleNewCard();
};

function togglePopup(popup) {
    popup.classList.toggle("popup_opened")
}

function toggleEdit() {
    togglePopup(popupEdit);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}

function toggleNewCard() {
    togglePopup(popupNewCard);
}

function toggleImage() {
    togglePopup(popupPicture);
}



// =====
// Handlers
// =====
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    toggleEdit();
}



// =====
// Event listeners
// =====
profileButton.addEventListener("click", toggleEdit);
closeEditButton.addEventListener("click", toggleEdit);
editFormElement.addEventListener("submit", handleFormSubmit);
addButton.addEventListener("click", toggleNewCard);
closeNewCardButton.addEventListener("click", toggleNewCard);
addFormElement.addEventListener("submit", addCard);
closeImageButton.addEventListener("click", toggleImage);
//elementImage.addEventListener("click", toggleImage);