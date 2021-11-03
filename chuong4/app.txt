"use strict";

const problem1 = document.getElementById('problem1');
const problem2 = document.getElementById('problem2');
const problem3 = document.getElementById('problem3');
const problem4 = document.getElementById('problem4');



// TODO: Problem 1
problem1.addEventListener('submit', event => {
    event.preventDefault();
    const { target } = event;
    const answer = target.querySelector('.answer');

    const inputs = target.querySelectorAll('input');
    const a = Number(inputs[0].value);
    const b = Number(inputs[1].value);

    const resolve = firstEquation(a, b);

    if (typeof resolve === 'string')
        return answer.innerHTML = 'Phương trình có vô số nghiệm.';
    if (resolve.length === 0)
        return answer.innerHTML = 'Phương trình vô nghiệm.';

    answer.innerHTML = `Phương trình có nghiệm: x1 = ${resolve[0]}.`;
})

// TODO: Problem 2
problem2.addEventListener('submit', event => {
    event.preventDefault();
    const { target } = event;
    const answer = target.querySelector('.answer');

    const inputs = target.querySelectorAll('input');
    const a = Number(inputs[0].value);
    const b = Number(inputs[1].value);
    const c = Number(inputs[2].value);

    const resolve = secondEquation(a, b, c);


    if (typeof resolve === 'string')
        return answer.innerHTML = 'Phương trình có vô số nghiệm.';

    if (resolve.length === 0)
        return answer.innerHTML = 'Phương trình vô nghiệm.';

    if (resolve.length === 1)
        return answer.innerHTML = `Phương trình có nghiệm kép: x = ${resolve[0]}.`

    answer.innerHTML = `Phương trình có 2 nghiệm:<br/>
    x1 = ${resolve[0]};<br/>
    x2 = ${resolve[1]}.
    `
})

// TODO: Problem 3
problem3.addEventListener('submit', event => {
    event.preventDefault();
    const { target } = event;
    const answer = target.querySelector('.answer');

    const inputs = target.querySelectorAll('input');
    const a = Number(inputs[0].value);
    const b = Number(inputs[1].value);
    const c = Number(inputs[2].value);

    if (!isTriangle(a, b, c))
        return answer.innerHTML = 'ABC không phải là tam giác.';

    answer.innerHTML = 'ABC là một tam giác.<br/>';

    if (isSquareTriangle(a, b, c))
        answer.innerHTML += 'ABC là tam giác vuông.<br/>';

    if (isIsoscelesTriangle(a, b, c))
        answer.innerHTML += 'ABC là tam giác cân.<br/>';

    if (isEquilateralTriangle(a, b, c))
        answer.innerHTML += 'ABC là tam giác đều.<br/>'

    answer.innerHTML += `Chu vi của tam giác là: ${perimeterTriangle(a, b, c)}<br/>`
    answer.innerHTML += `Diện tích của tam giác là: ${areaTriangle(a, b, c)}`
})

// Problem 4
problem4.addEventListener('submit', event => {
    event.preventDefault();
    const { target } = event;
    const answer = target.querySelector('.answer');

    const inputs = target.querySelectorAll('input');
    const x = Number(inputs[0].value);

    answer.innerHTML = `Kết quả: ${getSum(x)}`

})


// TODO: Anny functions
// Giai phuong trinh bac nhat
function firstEquation(a, b) {
    if (a === 0) {
        if (b !== 0)
            // 0
            return [];
        return "Infinite";
    }
    return [-b / a];
}

// Giai phuong trinh bac 2
function secondEquation(a, b, c) {
    if (a === 0)
        return firstEquation(b, c);

    const delta = b * b - 4 * a * c;
    if (delta < 0)
        return [];
    if (delta === 0)
        return [-b / (2 * a)];
    return [
        (-b - Math.sqrt(delta)) / (2 * a),
        (-b + Math.sqrt(delta)) / (2 * a),
    ];
}

// TODO: Triangle
const sort = (a, b, c) => [a, b, c].sort();
// Kiem tra tam giac
function isTriangle(a, b, c) {
    const arr = sort(a, b, c);
    return arr[0] + arr[1] > arr[2];
}

// Kiem tra tam giac vuong
function isSquareTriangle(a, b, c) {
    const arr = sort(a, b, c);
    return Math.pow(arr[0], 2) + Math.pow(arr[1], 2) === Math.pow(arr[2], 2);
}

// Kiem tra tam giac can
function isIsoscelesTriangle(a, b, c) {
    const arr = sort(a, b, c);
    return arr[0] === arr[1] || arr[1] === arr[2];
}

// Kiem tra tam giac deu
function isEquilateralTriangle(a, b, c) {
    return a === b && b === c;
}

// Tinh chu vi tam giac
function perimeterTriangle(a, b, c) {
    return a + b + c;
}

// Tinh dien tich tam giac
function areaTriangle(a, b, c) {
    const p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

// Tinh tong
function getSum(x) {
    let sum = 0;
    for (let i = 0; sum <= x; i += 2)
        sum += i;
    return sum;
}
