const profileButton = document.querySelector(".profile__button");
const popupOpened = document.querySelector(".popup_opened");
const popupClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const popupEdit = document.querySelector(".popup_type_edit");
const popupSave = document.querySelector(".popup__button");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const popupNewCard = document.querySelector(".popup_type_new-card");
const addButton = document.querySelector(".profile__add-button");
const titleInput = document.querySelector(".popup__input_type_card-name");
const imageInput = document.querySelector(".popup__input_type_url");
const popupImage = document.querySelector(".popup__content_content_image");



const closeEditButton = popupEdit.querySelector('.popup__close');
const closeNewCardButton = popupNewCard.querySelector('.popup__close');
const closeImageButton = popupImage.querySelector('.popup__close');



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

    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector(".element__image");
    const cardTitle = cardElement.querySelector(".element__title");

    const likeButton = cardElement.querySelector(".element__button");

    const deleteButton = cardElement.querySelector(".element__trash");

    const trashWrapper = cardElement.querySelector(".element__container");

    cardImage.style.backgroundImage = `url(${card.link})`;
    cardTitle.textContent = card.name;

    cardImage.addEventListener('click', () => handlePreviewPicture(card));

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




function addCard(evt) {
    evt.preventDefault();
    let newCard = { name: "", link: "" };
    newCard.name = addTitle.value;
    newCard.link = addImage.value;

    initialCards.push(newCard);
};





function toggleEdit() {
    popupEdit.classList.toggle("popup_opened")
}

function toggleNewCard() {
    popupNewCard.classList.toggle("popup_opened")
}

function toggleImage() {
    popupImage.classList.toggle("popup_opened")
}


function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    toggleEdit();
}

profileButton.addEventListener("click", toggleEdit);
closeEditButton.addEventListener("click", toggleEdit);
formElement.addEventListener("submit", handleFormSubmit);
addButton.addEventListener("click", toggleNewCard);
closeNewCardButton.addEventListener("click", toggleNewCard);
formElement.addEventListener("submit", addCard);
elementImage.addEventListener("click", toggleImage);