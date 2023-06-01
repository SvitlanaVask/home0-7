import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listRef = document.querySelector('.gallery');
const itemsMarkup = onGalerryMarkup(galleryItems);

listRef.insertAdjacentHTML('afterbegin', itemsMarkup);

listRef.addEventListener('click', onImageOpen)

function onGalerryMarkup (galleryItems) {
  return galleryItems.map(({ original, preview, description }) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
    
  }).join('');
}

function onImageOpen(e) {
  e.preventDefault();
  const imageUrl = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imageUrl}" width="800" height="600">`, {
    onShow: (instance) => {
      addEventListener('keydown', onEscClose.bind(instance)) 
    },
    onClose: (instance) => {
      removeEventListener('keydown', onEscClose);
      }
    })

  instance.show();
}

function onEscClose(e) {
  if (e.code === 'Escape') {
    this.close();
  }
}