const popupCaption = document.querySelector(".popup__caption");
const popupImage = document.querySelector(".popup__image");


class Card {
    constructor(card, cardSelector, handleCardClick) {
        this._name = card.name;
        this._link = card.link;
        this._cardSelector = cardSelector;
        this._openPopup = handleCardClick;
    }

    _getCardTemplate() {
        return document.querySelector(this._cardSelector).content.querySelector('.element__item').cloneNode(true);
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