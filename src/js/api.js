export default class Api {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImages() {
        return fetch(`https://pixabay.com/api/?key=32947980-69693e3c3da6102d615bc169f&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`)
    .then(r => r.json())
    .then(data => {
        this.page +=1;

        return data.hits;
    }) 
    }

    resetPage() {
        this.page = 1;
    }


    get query() {
        return this.searchQuery;
    }
     
    set query(newQuery) {
        this.searchQuery = newQuery; 
    }
}