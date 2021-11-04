let cart = JSON.parse(localStorage.getItem('cart')) || [];
const productList = document.querySelector('.product_list');
const productTotal = document.querySelector('.product_total');

const removeCart = (key) => {
    cart = cart.filter(e => e.key !== key);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}

let total = 0;
cart.forEach(e => {
    productList.innerHTML += `<tr>
                <td>
                    <img src="${$products[e.key].photo}" alt="${$products[e.key].name}"/>
                </td>
                <td>${$products[e.key].name}</td>
                <td>${e.count}</td>
                <td>${$products[e.key].price}đ</td>
                <td>${$products[e.key].price * e.count}đ</td>
                <td>
                    <div class="cart_icon" onclick="removeCart(${e.key})">
                    <i class="fas fa-trash-alt"></i>
                    </div>
                </td>
            </tr>`;

    total += $products[e.key].price * e.count;
})

productTotal.innerHTML += `
        <tr>
            <td colspan="6">
            Tổng thành tiền (A) = ${total}đ
            </td>
        </tr>

        <tr>
            <td colspan="6">
            Chiết khấu (B) = 0.1 x B = ${total * 0.1}đ
            </td>
        </tr>

        <tr>
            <td colspan="6">
            Thuế (C) = 10% x (A - B) = ${(total - (total * 0.1)) * 0.1}đ
            </td>
        </tr>

        <tr>
            <td colspan="6">
            Tổng đơn hàng = A - B + C = ${total - (total * 0.1) + (total - (total * 0.1)) * 0.1}đ
            </td>
        </tr>

        <tr>
            <td colspan="6">
            <button>Xác nhận đơn hàng</button>
            </td>
        </tr>
        `
