const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const elements = event.currentTarget.elements;
    const values = {};

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.tagName === "INPUT") {
            values[element.name] = element.value;
        }
    }

    const allFieldsFilled = Object.values(values).every(
        (value) => value.trim() !== ""
    );

    if (allFieldsFilled) {
        console.log(values);
        form.reset();
    } else {
        alert("All fields must be filled in!");
    }
});
