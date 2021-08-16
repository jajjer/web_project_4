/*function closeOnEscape(evt) {
    evt.preventDefault();
    if (e.keycode === 27) {
        closePopup(document.querySelector('.popup_opened'));
    }
};*/

class Card {
    constructor(card, cardSelector) {
        this._name = card.name;
        this._link = card.link;
        this._cardSelector = cardSelector;
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
            document.querySelector(".popup__caption").textContent = this._name;
            document.querySelector(".popup__image").src = this._link;
            document.querySelector(".popup__image").setAttribute("alt", document.querySelector(".popup__caption").textContent);
            document.querySelector(".popup_type_image").classList.toggle('popup_opened');
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