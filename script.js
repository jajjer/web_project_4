const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.popupTarget)
        openPopup(popup)
    })
})

closePopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup')
        closePopup(popup)
    })
})

function openPopup(popup) {
    if (popup == null) return
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
    if (popup == null) return
    popup.classList.remove('popup_opened')
}

// Let's find the form in the DOM
let formElement = // Use the querySelector() method

    // Next is the form submit handler, though
    // it won't submit anywhere just yet
    function handleFormSubmit(evt) {
        evt.preventDefault(); // This line stops the browser from submitting the form in the default way.
        // Having done so, we can define our own way of submitting the form.
        // We'll explain it in more detail later.

        // Let's find the form fields in the DOMe
        let nameInput = // Use querySelector()
            let jobInput = // Use querySelector()


                // Get the values of each field from the corresponding value property

                // Select elements where the field values will be entered

                // Insert new values using the textContent property of the querySelector() method
    }

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener('submit', handleFormSubmit);