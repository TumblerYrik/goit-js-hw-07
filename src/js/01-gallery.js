import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні.
// Подивися демо відео роботи галереї.

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

// Шаблон розмітки елемента галереї
function createGalleryItem({ preview, original, description }) {
  return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </div>
  `;
}

// Отримання посилань на елементи DOM
const galleryContainer = document.querySelector(".gallery");
// const lightbox = new SimpleLightbox('.gallery a', { /* опції для lightbox */ });

// Рендер розмітки галереї
const galleryMarkup = galleryItems
  .map((createGalleryItem) => {
    return `<li> <img src="$(createGalleryItem)" loading="lazy" width="300"</li>`;
  })
  .join("");

galleryContainer.innerHTML = galleryMarkup;

// // Реалізація делегування подій і перегляд великого зображення
// galleryContainer.addEventListener('click', handleGalleryClick);

// function handleGalleryClick(event) {
//   event.preventDefault();

//   const clickedElement = event.target;
//   if (clickedElement.nodeName !== 'IMG') {
//     return;
//   }

//   const imageURL = clickedElement.dataset.source;
//   lightbox.open({ items: [{ src: imageURL }] });
// }
