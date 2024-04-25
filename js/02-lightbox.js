import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        <div class="gallery__caption"> title="${description}"</div> 
    </a>
</li>
      `;
        })
        .join("");
}

// Змінюємо функцію handleGalleryClick
function handleGalleryClick(event) {
    event.preventDefault();

    const clickedElement = event.target;

    // Перевіряємо, чи клікнуто на зображення
    if (clickedElement.classList.contains("gallery__image")) {
      const largeImageUrl = clickedElement.dataset.source;
      const imageAlt = clickedElement.alt;

      // Створюємо об'єкт зображення для SimpleLightbox
      const lightboxImage = {
        url: largeImageUrl,
        caption: imageAlt,
      };

      // Ініціалізуємо SimpleLightbox зі зміненими параметрами
      const lightbox = new SimpleLightbox(lightboxImage, {
        captionsData: "alt",
        captionDelay: 250,
      });

      // Відкриваємо SimpleLightbox з об'єктом зображення
      lightbox.open();
    }
}

// Додаємо обробник події на ul.gallery
document.querySelector('.gallery').addEventListener('click', handleGalleryClick);


