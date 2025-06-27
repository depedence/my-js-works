let targetNumber = 2
let currentNumber = 0;

while (currentNumber <= targetNumber) {
    if (currentNumber % 2 == 0) {
        console.log(currentNumber)
    }
    currentNumber++
}

let num = 7
let count = 1

while (count != 11) {
    console.log(`${num} * ${count} =`, num * count)
    count++
}

const num1 = 9
const num2 = 6

if (num1 > num2) {
    for (let i = num1; i >= num2; i--) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
} else if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
}

const N = parseInt(prompt("Введите целое число N (степень):"));

if (isNaN(N)) {
    console.log("Ошибка: нужно ввести целое число!");
} else {
    let result = 1;

    while (counter < Math.abs(N)) {
        result *= 2;
        counter++;
    }

    if (N < 0) {
        result = 1 / result;
    }

    console.log(`2 в степени ${N} = ${result}`);
}

let num = parseInt(prompt())
let count = parseInt(prompt())

while (num <= 1000) {
    num *= 2
    count++
}

console.log(`Итоговое число: ${num}`)
console.log(`Количество итераций: ${count}`)
