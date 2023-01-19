import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '32947980-69693e3c3da6102d615bc169f';
const IMAGES_PER_PAGE = 40;


export default class Api {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.totalPages = 0;
    }

    fetchImages() {
        return axios(`https://pixabay.com/api/?key=${KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${IMAGES_PER_PAGE}&page=${this.page}`)
    .then(response => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.data;
      })
      .then(response => {
        this.calcTotalPages(response);
        this.incrementPage();
        return response;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  calcTotalPages(imagesObj) {
    if (this.page === 1) {
      this.totalPages = Math.ceil(imagesObj.totalHits / IMAGES_PER_PAGE);
    }
  }


    get query() {
        return this.searchQuery;
    }
     
    set query(newQuery) {
        this.searchQuery = newQuery; 
    }
}