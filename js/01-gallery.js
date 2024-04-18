import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Отримання посилань на елементи DOM
const galleryContainer = document.querySelector(".gallery");
// Рендер розмітки галереї
const galleryMarkup = galleryItems.map(createGalleryItem).join("");

// Шаблон розмітки елемента галереї
function createGalleryItem({ preview, original, description }) {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </div>
  `;
    instance.show(cb)
}

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

// galleryContainer.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {  });

// Реалізація делегування подій і перегляд великого зображення
galleryContainer.addEventListener("click", handleGalleryClick);

function handleGalleryClick(event) {
    event.preventDefault();

    const clickedElement = event.target;
    if (clickedElement.nodeName !== "IMG") {
        return;
    }

    const imageURL = clickedElement.dataset.source;
    lightbox.open({ items: [{ src: imageURL }] });
    
}


