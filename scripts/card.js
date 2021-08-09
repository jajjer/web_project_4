function closeOnEscape(evt) {
    evt.preventDefault();
    if (e.keycode === 27) {
        closePopup(document.querySelector('.popup_opened'));
    }
};

class Card {
    constructor(card, cardSelector) {
        this._name = card.name;
        this._link = card.link;

        this._likeButton =

            this._cardSelector = cardSelector;
    }

    _setEventListeners() {
        this._element.querySelector(".element__button").addEventListener("click", () => this._handleLikeIcon());
        //likeButton.addEventListener("click", hadleLikeIcon);
        this._element.querySelector(".element__trash").addEventListener("click", () => this._hadleDeleteCard());
        //deleteButton.addEventListener("click", handleDeleteButton);
        this._element.querySelector(".element__image").addEventListener("click", () => this._handlePreviewPicture.bind());
        // cardImage.addEventListener("click", () => handlePreviewPicture)
    }

    _handleLikeIcon() {
        // likeButton.classList.toggle("element__button_active")
        this._element.querySelector(".element__button").classList.toggle("element__button_active");
    }

    _hadleDeleteCard() {
        this._element.remove()
    }

    _handlePreviewPicture() {
        toggleImage(popupImage);
    }


    _getTemplate() {
        document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
    }

    getView() {
        this._element = this._getTemplate();

        this._element.querySelector(".element__image").style.backgroundImage = `url(${card.link})`;
        this._element.querySelector(".element__title").textContent = card.name;

        this._setEventListeners();
    }
}

export default Card;