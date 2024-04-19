import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Шаблон розмітки елемента галереї
function createGalleryItem({ preview, original, description }) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>
  `;
}

// Отримання посилань на елементи DOM
const galleryContainer = document.querySelector('.gallery');



// Рендер розмітки галереї
const galleryMarkup = galleryItems.map(createGalleryItem).join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
// galleryContainer.innerHTML = galleryMarkup;

// Реалізація делегування подій і перегляд великого зображення
galleryContainer.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();
  
  const clickedElement = event.target;
  if (clickedElement.nodeName !== 'IMG') {
    return;
  }
  
  const imageURL = clickedElement.dataset.source;
  lightbox.open({ items: [{ src: imageURL }] });
}

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  if (event.code === 'Escape') {
    lightbox.close();
  }
}


const instance = basicLightbox.create(`
    <h1>Dynamic Content</h1>
    <p>You can set the content of the lightbox with JS.</p>
`);

instance.show(() => console.log("lightbox now visible"));
