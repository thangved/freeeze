const search = document.querySelector('.search_wrapper');
const searchInput = search.querySelector('input');
const searchButton = search.querySelector('.search_button');
const cartButton = search.querySelectorAll('.search_button')[1];

const onSearch = (keyword) => {
    location = `./timkiem.html?keyword=${keyword}`;
}
searchInput.addEventListener('keypress', event => {
    if (searchInput.value.length === 0)
        return;
    if (event.code === 'Enter')
        onSearch(searchInput.value);
})

searchButton.addEventListener('click', event => {
    if (searchInput.value.length === 0)
        return;
    onSearch(searchInput.value);
});

cartButton.addEventListener('click', event => location = './donhang.html')
// const urlSearchParams = new URLSearchParams(window.location.search);
// const params = Object.fromEntries(urlSearchParams.entries());

// console.log(params)
