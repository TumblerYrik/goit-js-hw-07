import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Отримання посилань на елементи DOM
const galleryContainer = document.querySelector('.gallery');

// Рендер розмітки галереї
const galleryMarkup = galleryItems.map(createGalleryItem).join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
// galleryContainer.innerHTML = galleryMarkup;

// Реалізація делегування подій і перегляд великого зображення
galleryContainer.addEventListener('click', handleGalleryClick);

// Шаблон розмітки елемента галереї
function createGalleryItem({ preview, original, description }) {
  return `
    <li class="gallery__item js-item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>
  `;
}

function handleGalleryClick(event) {
  event.preventDefault();
  console.log(event.target);
//   const clickedElement = event.target;
//   if (clickedElement.nodeName !== 'IMG') {
//     return;
//   }

//   const targetElement = event.target.closest('js-item');
//   const instance = basicLightbox.create(`
//     <img src="data-source" width="800" height="600">
// `);

//   instance.show();
}
//   const imageURL = clickedElement.dataset.source;
//   lightbox.open({ items: [{ src: imageURL }] });