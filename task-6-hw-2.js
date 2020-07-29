'use strict'

let total = 0;
let input;
let numbers = [];

do {
    input = prompt('Введите число');
    if (input === "") {
        continue;
    } else {numbers.push(+input);
    }
}   while (input !== null);

if (numbers.length !== 0) {
    for (let number of numbers) {
        total += number;
    }
}
console.log(`Общая сумма чисел равна ${total}`);

