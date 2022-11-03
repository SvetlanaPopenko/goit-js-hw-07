import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);

const containerGallery = document.querySelector('.gallery');

function addGallery(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<a class = "gallery__item" href = "${original}">
    <img class = "gallery__image" src="${preview}" alt="${description}"/>
    </a>`
    )
    .join('');
}
containerGallery.insertAdjacentHTML('beforeend', addGallery(galleryItems));

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
