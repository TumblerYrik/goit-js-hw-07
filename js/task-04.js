const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById("value");

let counterValue = 0;

const updateCounterValue = () => {
    valueSpan.textContent = counterValue;
};

decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    updateCounterValue();
});

incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    updateCounterValue();
});

updateCounterValue();
