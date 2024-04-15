// const container = document.querySelector(".js-container");

// // [...container.children].forEach((item) =>
// //   item.addEventListener("click", onClick)
// // );

// container.addEventListener("click", onClick);

// function onClick(evt) {
//     if (!evt.target.classList.contains("js-box")) {
//         return;
//     }
//     //   console.log(evt.currentTarget);
//     console.log(evt.target.dataset.color);
// }

const container = document.querySelector(".js-content");
console.log(container);

let player = "X";
let markup = "";

for (let i = 0; i < 9; i += 1) {
    markup += `<div class="item js-item"></div>`;
}

console.log(markup);
container.innerHTML = markup;

container.addEventListener("click", onClick);

function onClick(evt) {
    const { target } = evt;
    if (!target.classList.contains("js-item") || target.textContent) {
        return;
    }
    target.textContent = player;
    player = player === "X" ? "0" : "X";
    //   console.log(evt.currentTarget);
    //   console.log(evt.target);
}
