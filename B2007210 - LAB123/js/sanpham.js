const products = document.querySelectorAll('.product');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const addToCart = (input, key) => {
    if (input.value <= 0 || input.value > 100)
        return alert('Số lượng phải nằm từ 1 đến 100');
    let added = false;

    cart = cart.map(e => {
        if (e.key === key) {
            added = true;
            return {
                ...e,
                count: e.count + parseInt(input.value),
            };
        }
        return e;
    });

    if (!added)
        cart.push({
            key,
            count: parseInt(input.value) || 0,
        })

    localStorage.setItem('cart', JSON.stringify(cart));
}

products.forEach((product, key) => {
    const input = product.querySelector('input');
    const button = product.querySelector('button');

    button.addEventListener('click', () => addToCart(input, key));
    input.addEventListener('keydown', event => {
        if (event.code === 'Enter')
            addToCart(input, key);
    })

})

