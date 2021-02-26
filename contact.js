const submitBtn = document.querySelector(".submit-btn");

// Read values from input fields
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputConfEmail = document.querySelector("#conf-email");
const inputMessage = document.querySelector("#message");

// check if the field is empty
function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
};

// check if the input email is va
function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
};

// Check if the field is valid
function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.classList.add('textfieldRed');
    } else {
    field.classList.remove('textfieldRed');
    }

    return isFieldValid;
};

// Check if the confirmed e mail is the same
function areEmailsEqual() {
    if (inputEmail.value !== inputConfEmail.value) {
    // inputEmail.classList.add('textfieldRed');
    inputConfEmail.classList.add('textfieldRed');
    alert("Please input the SAME email address!");
    return false;
    }
    return true;
};

// Validate
function isValid() {
    var valid = true;

    valid &= fieldValidation(inputName, isNotEmpty);
    valid &= fieldValidation(inputEmail, isNotEmpty);
    valid &= fieldValidation(inputEmail, isEmail);
    valid &= fieldValidation(inputConfEmail, isNotEmpty);
    valid &= fieldValidation(inputMessage, isNotEmpty);
    valid &= areEmailsEqual();

    return valid;
};

// Show confirmation
function confirm() {
    console.log("confirm");
    window.location = "contactConfirm.html";
};

// submitBtn.addEventListener("click", () => {
//     // Change textfield color back from red
//     inputName.classList.remove("textfieldRed");
//     inputEmail.classList.remove("textfieldRed");
//     inputConfEmail.classList.remove("textfieldRed");
//     inputMessage.classList.remove("textfieldRed");
//     // isValid();
//     // if not valid, show error
//     if (!isValid()) {
//         if (inputName.classList.contains("textfieldRed")) {
//             alert("Please let me know your name!");
//         } else if (inputEmail.classList.contains("textfieldRed")) {
//             alert("Please let me know your correct email address!");
//         } else if (inputMessage.classList.contains("textfieldRed")) {
//             alert("Please input message!");
//         };
//         console.log("not valid");
//     } else {
//         confirm();
//     };
// });

// Clear input field
// const clearBtn = document.querySelector(".clear-btn");
// clearBtn.addEventListener("click", ()=> {
//     inputName.value = "";
//     inputEmail.value = "";
//     inputConfEmail.value = "";
//     inputMessage.value = "";
// });

// Confirmation page
// const nameToConfirm = document.querySelector(".name-confirm");
// const emailToConfirm = document.querySelector(".email-confirm");
// const messageToConfirm = document.querySelector(".message-confirm");

// nameToConfirm.textContent = inputName.value;
// emailToConfirm.textContent = inputEmail.value;
// messageToConfirm.textContent = inputMessage.value;