const search = document.querySelector('.search_wrapper');
const searchInput = search.querySelector('input');
const searchButton = search.querySelector('.search_button');
const cartButton = search.querySelectorAll('.search_button')[1];
const $products = [
    {
        "name": "Sữa Chua Vị Kiwi",
        "price": 21000,
        "photo": "images/sanpham/kiwi.jpg"
    },
    {
        "name": "Sữa Chua Vị Xoài",
        "price": 22000,
        "photo": "images/sanpham/mango.jpg"
    },
    {
        "name": "Sữa Chua Vị Dưa lưới",
        "price": 23000,
        "photo": "images/sanpham/cantaloupe.jpg"
    },
    {
        "name": "Sữa Chua Vị Mâm Xôi",
        "price": 24000,
        "photo": "images/sanpham/blackberry.jpg"
    },
    {
        "name": "Sữa Chua Vị Dâu Tây",
        "price": 25000,
        "photo": "images/sanpham/strawberry.jpg"
    },
    {
        "name": "Sữa Chua Vị Việt Quất",
        "price": 26000,
        "photo": "images/sanpham/blueberry.jpg"
    },
    {
        "name": "Sữa Chua Vị Bưởi",
        "price": 27000,
        "photo": "images/sanpham/grapes.jpg"
    },
    {
        "name": "Sữa Chua Vị Táo Xanh",
        "price": 28000,
        "photo": "images/sanpham/green-apple.jpg"
    },
    {
        "name": "Sữa Chua Vị Dứa",
        "price": 29000,
        "photo": "images/sanpham/pineapple.jpg"
    }
]

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

