const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const searchResult = document.querySelector('.search_result');

$products.forEach(product => {
    if (product.name.toLowerCase().indexOf(params.keyword.toLowerCase()) !== -1)
        searchResult.innerHTML += `
        <div class="search_product">
            <img src="${product.photo}"/>
            <div class="search_product_name">
                ${product.name}
            </div>
        </div>
        `
});
