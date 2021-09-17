// data
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// functions
function makeGalleryItemMarkup({ url, alt }) {
  return `
    <li class="gallery__item">
      <img class="gallery__picture" src="${url}" alt="${alt}">
    </li>`;
}

function makeGalleryMarkup(array) {
  return array.map(makeGalleryItemMarkup).join('');
}

// operations
const result = makeGalleryMarkup(images);

const galleryListRef = document.querySelector('#gallery');

galleryListRef.insertAdjacentHTML('afterbegin', result);

// style
const styleRef = document.querySelector('style');
const galleryStyle = `#gallery {
  display: flex;
  list-style: none;
}
.gallery__item {
  flex-basis: (100 / 3) - 60px;
  margin: 0 10px;
}
.gallery__picture {
  height: 250px;
}`;

styleRef.insertAdjacentHTML('beforeend', galleryStyle);
