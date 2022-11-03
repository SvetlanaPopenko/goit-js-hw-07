import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerGallery = document.querySelector('.gallery');

containerGallery.addEventListener('click', onClickGallery);

function onClick(arr) {
  return arr.map(({ preview, original, description }) =>
    `<div class = "gallery__item">
    <a class = "gallery__link" href = "${original}">
    <img class = "gallery__image" src="${preview}" alt="${description}" data - source = "${original}"/>
    </a>
    </div>`).join('');
 }
containerGallery.insertAdjacentHTML('beforeend', onClick(galleryItems));

console.log(basicLightbox);
function onclickGallery(evt) {
  
}