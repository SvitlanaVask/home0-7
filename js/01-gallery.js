import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBoxRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryBoxRef.insertAdjacentHTML('afterbegin', galleryMarkup);

galleryBoxRef.addEventListener('click', onGalleryImageClick)

function createGalleryMarkup(items) { 
  return items.map(({original, preview, description }) => {
    return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
   `
  }).join('');
};

function onGalleryImageClick(evt) {
  evt.preventDefault();
  
  const originalImgUrl = evt.target.dataset.source;  
  
  basicLightbox.create(`
		<img width="860" src="${originalImgUrl}">
	`).show()

  if (!evt.target.classList.contains('gallery__image')) {
      return
    }
  
  instance.show();
}