import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listRef = document.querySelector('.gallery');
const itemsMarkup = onGalerryMarkup(galleryItems);

listRef.insertAdjacentHTML('afterbegin', itemsMarkup);

listRef.addEventListener('click', onImageOpen);

function onGalerryMarkup (galleryItems) {
  return galleryItems.map(({ original, preview, description }) => {
    return `<li class="gallery__item">
              <a class="gallery__link" href="${original}">
                  <img class="gallery__image" src="${preview}" alt="${description}" />
              </a>
            </li>`
    
  }).join('');
}

function onImageOpen(e) {
  e.preventDefault();

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
  });
}
