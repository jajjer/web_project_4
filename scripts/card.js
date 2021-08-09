function closeOnEscape(evt) {
    evt.preventDefault();
    if (e.keycode === 27) {
        closePopup(document.querySelector('.popup_opened'));
    }
};

class Card {
    constructor(card, cardTemplateSelector) {
        this._name = card.name;
        this._link = card.link;
        this._cardTemplateSelector = cardTemplateSelector;
    }

    _getCardTemplate() {
        const cardElement = this._cardTemplateSelector.cloneNode(true);
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
            document.querySelector(".element__title").textContent = this._name;
            document.querySelector(".element__image").src = this._link;
            document.querySelector(".element__image").setAttribute("alt", document.querySelector(".element__title").textContent);
            document.querySelector(".popup_type_image").classList.toggle('.popup_opened');
        });
    }

    getView() {
        this._element = this._getCardTemplate();

        this._element.querySelector(".element__image").style.backgroundImage = `url(${card.link})`;
        this._element.querySelector(".element__title").textContent = card.name;

        this._setEventListeners(this._card);

        return this._card;
    }
}

export default Card;