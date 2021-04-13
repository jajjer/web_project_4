const profileButton = document.querySelector(".profile__button");
const popupOpened = document.querySelector(".popup_opened");
const popupClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const popupSave = document.querySelector(".form__save");
const formElement = document.querySelector(".form");
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_about");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const add = document.querySelector(".add");
const addOpened = document.querySelector(".add_opened");
const addClose = document.querySelector(".add__close");
const addButton = document.querySelector(".profile__add-button");
const titleInput = document.querySelector(".form__input_type_title");
const imageInput = document.querySelector(".form__input_type_image");
const likeButton = document.querySelector(".element__button");
const likeButtonActive = document.querySelector(".element__button_active");
const elementTitle = document.querySelector(".element__title");
const elementImage = document.querySelector(".element__image");
const template = document.querySelector("#template__photo").content;
const newElement = template.querySelector(".element__item").cloneNode(true);
const templateList = document.querySelector(".template__list");

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

initialCards.forEach(element => console.log(element.name = elementTitle));
initialCards.forEach(element => console.log(element.link = elementImage));


newElement.querySelector(".element__image").src =
    templateList.append(newElement);


function openAdd() {
    add.classList.add('add_opened')
}

function closeAdd() {
    add.classList.remove('add_opened')
}

function like() {
    likeButton.classList.add('element__button_active')
    likeButton.classList.remove('element__button')
}

function openPopup() {
    popup.classList.add('popup_opened')
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
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
addButton.addEventListener("click", openAdd);
addClose.addEventListener("click", closeAdd);
likeButton.addEventListener("click", like);