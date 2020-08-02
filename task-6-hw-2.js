'use strict'

let input;
const numbers = [];
let total = 0;


do {
    input = prompt('Введите число');
    
    if (Number.isNaN(Number(input))) {
        alert("Было введено не число. Повторите попытку.");
        continue;
    }
    if (input == null) {
        break;
    }
    numbers.push(+input);
} while (input !== null);

if (numbers.length > 0) {
    for (let number of numbers) {
        total += number;
    }
console.log(`Общая сумма чисел равна ${total}`);
}
