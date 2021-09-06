const imagePopup = document.querySelector('.popup_type_image');
const popupCaption = document.querySelector(".popup__caption");
const popupImage = document.querySelector(".popup__image");


const handleEsc = (evt) => {
    console.log('handleEsc ran')
    if (evt.key === 'Escape') {
        // find open popup
        const openedPopup = document.querySelector(".popup_opened");
        closeImagePopup(openedPopup);
    }
};

function openImagePopup() {
    imagePopup.classList.add("popup_opened");
    document.addEventListener('keyup', handleEsc);
}

function closeImagePopup() {
    imagePopup.classList.remove("popup_opened");
    document.removeEventListener("keyup", handleEsc);
}

class Card {
    constructor(card, cardSelector, handleCardClick) {
        this._name = card.name;
        this._link = card.link;
        this._cardSelector = cardSelector;
        this._openPopup = handleCardClick;
    }

    _getCardTemplate() {
        const cardElement = this._cardSelector.cloneNode(true);
        return cardElement;
        //document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
    }

    _setEventListeners(_card) {
        const likeButton = _card.querySelector(".element__button");
        const deleteButton = _card.querySelector(".element__trash");
        const cardImage = _card.querySelector(".element__image");


        likeButton.addEventListener("click", () => {
            likeButton.classList.toggle("element__button_active");
        });

        deleteButton.addEventListener("click", () => {
            _card.remove();
        });

        cardImage.addEventListener("click", () => {
            popupCaption.textContent = this._name;
            popupImage.src = this._link;
            popupImage.setAttribute("alt", popupCaption.textContent);
            openImagePopup();
        });
    }

    getView() {
        this._card = this._getCardTemplate();

        this._card.querySelector(".element__image").style.backgroundImage = `url(${this._link})`;
        this._card.querySelector(".element__title").textContent = this._name;

        this._setEventListeners(this._card);

        return this._card;
    }
}

export default Card;