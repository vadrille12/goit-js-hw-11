const e={searchForm:document.querySelector(".js-search-form"),galleryList:document.querySelector(".js-gallery-list"),loadMore:document.querySelector(".load-more")},t=new class{fetchImages(){return fetch(`https://pixabay.com/api/?key=32947980-69693e3c3da6102d615bc169f&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`).then((e=>e.json())).then((e=>(this.page+=1,e.hits)))}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.page=1}};function r(){t.fetchImages().then((e=>console.log(e)))}e.searchForm.addEventListener("submit",(function(e){if(e.preventDefault(),0===t.totalHits)return Notiflix.Notify.failure("Sorry, there is no images matching your search query. Please, try again");t.query=e.currentTarget.elements.searchQuery.value,t.resetPage(),r()})),e.loadMore.addEventListener("click",r);
//# sourceMappingURL=index.077eb8d6.js.map
