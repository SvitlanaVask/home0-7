import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryBoxRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryBoxRef.insertAdjacentHTML('afterbegin', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', { 
  captionsData: "alt",
  captionDelay: 200,
});

function createGalleryMarkup(items) { 
  return items.map(({original, preview, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
   `
  }).join('');
};

