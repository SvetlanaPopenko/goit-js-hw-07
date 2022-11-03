import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerGallery = document.querySelector('.gallery');

containerGallery.addEventListener('click', onClickGallery);

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

function onClickGallery(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `
  <div class="modal">
		<img width="1200" src="${e.target.dataset.source}">
	</div>`,
    {
      onShow: instance => {
        containerGallery.addEventListener('keydown', onAddModalKeydown);
      },
      onClose: instance => {
        containerGallery.removeEventListener('keydown', onAddModalKeydown);
      },
    }
  );
  instance.show();

  function onAddModalKeydown(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}
