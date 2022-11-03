import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerGallery = document.querySelector('.gallery');

function addGallery(arr) {
  return arr
    .map(
      ({ preview, original, description }) => 
        `<div class = "gallery__item">
    <a class = "gallery__link" href = "${original}">
    <img class = "gallery__image" src="${preview}" data-source = "${original}" alt="${description}"/>
    </a>
    </div>`
      )
    .join('');
}
containerGallery.insertAdjacentHTML('beforeend', addGallery(galleryItems));

console.log(basicLightbox);

containerGallery.addEventListener('click', onClickGallery);

function onClickGallery(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const originalEl = basicLightbox.create(
    `
  <div class="modal">
		<img width="1200" src="${e.target.dataset.source}">
	</div>`,
    {
      onShow: originalEl => {
        containerGallery.addEventListener('keydown', onAddModalKeydown);
      },
      onClose: originalEl => {
        containerGallery.removeEventListener('keydown', onAddModalKeydown);
      },
    }
  );
  originalEl.show();

  function onAddModalKeydown(evt) {
    if (evt.code === 'Escape') {
      originalEl.close();
    }
  }
}
