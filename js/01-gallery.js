import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerGallery = document.querySelector('.gallery');

containerGallery.addEventListener('click', onClickGallery);

function onClick(arr) {
  return arr.map(({ preview, original, description }) =>
    `<div class = "gallery__item">
    <a class = "gallery__link" href = "${original}">
    <img class = "gallery__image" src="${preview}" data - source = "${original}" alt="${description}"/>
    </a>
    </div>`).join('');
 }
containerGallery.insertAdjacentHTML('beforeend', onClick(galleryItems));

console.log(basicLightbox);
function onClickGallery(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return
  }
  const originalEl = basicLightbox.create(`
  <div class="modal">
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	</div>`,
    { onShow: (instance) => {
      containerGallery.addEventListener('keydown', onAddModalKeydown);
     },
    onClose: (instance) => {
      containerGallery.removeEventListener('keydown', onAddModalKeydown);
     },}
  );
  originalEl.show();
  
    function onAddModalKeydown(evt) {
      if (evt.code === "Escape") {
        originalEl.close();
      }
    }
}