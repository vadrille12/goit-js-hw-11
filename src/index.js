import Api from "./js/api";

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    galleryList: document.querySelector('.js-gallery-list'),
    loadMore: document.querySelector('.load-more')
}

const newApi = new Api()

refs.searchForm.addEventListener('submit', onSearch)
refs.loadMore.addEventListener('click', loadImages)

function onSearch (e) {
    e.preventDefault();
    if (newApi.totalHits === 0) {
        return Notiflix.Notify.failure('Sorry, there is no images matching your search query. Please, try again');
    }
    newApi.query = e.currentTarget.elements.searchQuery.value 
    newApi.resetPage();
    loadImages()
}

function loadImages () {
    newApi.fetchImages().then(hits => console.log(hits))
}

function appendGalleryMarkup(hits) {
    refs.galleryList.insertAdjacentHTML('beforeend', )
    
}