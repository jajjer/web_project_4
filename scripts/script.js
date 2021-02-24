const profileButton = document.querySelector(".profile__button");
const popupOpened = document.querySelector(".popup_opened");
const popupClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

function openPopup() {
    popup.classList.add('popup_opened')
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

profileButton.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);


// Let's find the form in the DOM
let formElement = document.querySelector(".popup__form") // Use the querySelector() method

// Next is the form submit handler, though
// it won't submit anywhere just yet
function handleFormSubmit(evt) {
    evt.preventDefault(); // This line stops the browser from submitting the form in the default way.
    // Having done so, we can define our own way of submitting the form.
    // We'll explain it in more detail later.

    // Let's find the form fields in the DOMe
    let nameInput = document.querySelector(".popup__profile__name") // Use querySelector()
    let jobInput = document.querySelector(".popup__profile__about") // Use querySelector()


    // Get the values of each field from the corresponding value property

    // Select elements where the field values will be entered

    // Insert new values using the textContent property of the querySelector() method
}

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener('submit', handleFormSubmit);