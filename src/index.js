import Api from "./js/api";

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    galleryList: document.querySelector('.js-gallery-list'),
    loadMore: document.querySelector('.load-more')
}

const images = new Api()
let totalHits = 0;

refs.searchForm.addEventListener('submit', onSearch)
refs.loadMore.addEventListener('click', loadImages)

function onSearch (e) {
    e.preventDefault();

    images.query = e.currentTarget.elements.searchQuery.value 
    images.resetPage();
    loadImages()
}

function loadImages () {
    images.fetchImages().then(appendGalleryMarkup)
}

function appendGalleryMarkup(imagesObj) {
    refs.galleryList.insertAdjacentHTML('beforeend', imagesObj.hits
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
          return `
      <div class="photo-card">
      <img class="photo-img" src="${webformatURL}" alt="${tags}" loading="lazy" />
      <div class="info">
        <p class="info-item">
          <b>Likes</b>${likes}
        </p>
        <p class="info-item">
          <b>Views</b>${views}
        </p>
        <p class="info-item">
          <b>Comments</b>${comments}
        </p>
        <p class="info-item">
          <b>Downloads</b>${downloads}
        </p>
      </div>
    </div>`;
        }
      )
      .join(''))
    
}