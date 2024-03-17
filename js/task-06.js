const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
    const inputValue = validationInput.value.trim();
    const expectedLength = parseInt(validationInput.dataset.length, 10);

    if (inputValue.length === expectedLength) {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
    } else {
        validationInput.classList.remove("valid");
        validationInput.classList.add("invalid");
    }
});

