"use strict";

const problem1 = document.getElementById('problem1');
const problem2 = document.getElementById('problem2');
const problem3 = document.getElementById('problem3');

// TODO: Handle click

// + Problem 1
problem1.addEventListener('submit', event => {
    event.preventDefault();
    const { target } = event;
    const answers = target.querySelector('.answer');
    const n = parseInt(target.querySelector('input').value);

    answers.innerHTML = `Giai thừa của ${n} là: ${factorial(n)}`;
})

//  + Problem 2
problem2.addEventListener('submit', event => {
    event.preventDefault();
    const { target } = event;
    const answers = target.querySelector('.answer');
    const n = parseInt(target.querySelector('input').value);

    answers.innerHTML = `Tổng của số chẵn nhỏ hơn ${n} là: ${sumEven(n)[0]} = ${sumEven(n)[1]}`;
})

//  + Problem 3
problem3.addEventListener('submit', event => {
    event.preventDefault();
    const { target } = event;
    const answers = target.querySelector('.answer');
    const n = parseInt(target.querySelector('input').value);

    answers.innerHTML = `Tổng của số lẻ nhỏ hơn ${n} là: ${sumOdd(n)[0]} = ${sumOdd(n)[1]}`;

})

// TODO: Functions

// + Factorial
const factorial = n => n === 0 ? 1 : n * factorial(n - 1);

// + sumEven
const sumEven = n => {
    let str = [];
    for (let i = 0; i < n; i += 2)
        str.push(i);
    return [str.join(' + '), str.reduce((pre, cur) => (pre + cur))];
}

// + sumOdd
const sumOdd = n => {
    try {
        let str = [];
        for (let i = 1; i < n; i += 2)
            str.push(i);
        return [str.join(' + '), str.reduce((pre, cur) => (pre + cur))];
    }
    catch {
        return ['', 0];
    }
}
