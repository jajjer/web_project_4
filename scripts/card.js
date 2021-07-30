class Card {
    constructor(data, cardTemplate) {
        this._name = data.name;
        this._link = data.link;
        this._cardTemplate = cardTemplate;
    }

    _getCardTemplate() {
        const cardTemplate = document.querySelector("#template__photo").content.querySelector(".element__item");
        const cardElement = cardTemplate.cloneNode(true);
        return cardElement;
    }

    _setEventListeners(_card) {
        const likeButton = cardElement.querySelector(".element__button");
        const deleteButton = cardElement.querySelector(".element__trash");
        const cardImage = cardElement.querySelector(".element__image");

        likeButton.addEventListener("click", (e) =>
            likeButton.classList.toggle("element__button_active")
        );

        deleteButton.addEventListener("click", (e) =>
            cardElement.remove()
        );

        cardImage.addEventListener("click", () => {
            toggleImage(popupImage);
            popupPicture.src = card.link;
            popupCaption.textContent = card.name;
        });
    }
}

export default Card;