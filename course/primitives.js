// let income = parseInt(prompt())
// let expenses = parseInt(prompt())

// let budget = {
//     income,
//     expenses,
//     calculateProfit: function(a, b) {
//         profit = a - b
//     }
// }

// budget.calculateProfit(income, expenses)

// if (profit > 0) {
//     console.log(`Ваша прибыль составляет ${profit} рублей`)
// } else if (profit === 0) {
//     console.log('Вы отработали в ноль')
// } else {
//     console.log(`Вы ушли в минус на ${profit*-1} рублей`)
// }


// const itemName = prompt();
// const itemPrice = Number(prompt());
// const quantity = Number(prompt());

// let calculateTotal = (a, b, c) => {
//     console.log(`Вы выбрали ${a} товаров "${b}" по цене ${c} рублей за штуку. Итого: ${a*c} рублей`)
// }

// const message = calculateTotal(quantity, itemName, itemPrice);


// const itemName = prompt();
// const itemPrice = Number(prompt());
// const quantity = Number(prompt());

// let calculateTotal = (a, b, c) => {
//     console.log(`Вы выбрали "${a}" по цене ${b} рублей за штуку.\nКоличество: ${c} шт.\nИтого: ${b*c} рублей.`)
// }

// const message = calculateTotal(itemName, itemPrice, quantity);


// let sentence = "слон ест";
// let searchString = "он";

// if (sentence.includes(searchString.toUpperCase())) {
//   console.log(`Строка "${sentence}" содержит подстроку "${searchString}"`);
// } else {
//   console.log(`Строка "${sentence}" не содержит подстроку "${searchString}"`);
// }


// let word = prompt()

// if (word.length < 5) {
//     console.log(`${word}!`)
// } else {
//     console.log(`${word}?`)
// }


// let word = prompt()

// if (word.includes('д') || word.includes('н')) {
//     console.log(word.toUpperCase())
// } else {
//     console.log(word.toLowerCase())
// }


// let word = prompt()
// word = word.toLowerCase()

// if (word.startsWith('ж')) {
//     console.log(word.length)
// } else {
//     console.log('Попробуйте снова')
// }


// const text = "Истина парадоксальна";
// let vowelCount = 0;
// for (let i = 0; i < text.length; i++) {
//   let char = text[i].toLowerCase()
//   if (char === "а" || char === "е" || char === "и" || char === "о" || char === "у" || char === "э"
// || char === "ю" || char === "я") {
//     vowelCount++;
//    }
// }

// console.log(vowelCount);


// const sentence = prompt();

// for (let i = 0; i < sentence.length; i++) {
//   console.log(sentence[i].toLowerCase());
// }


// const word = prompt()

// if (word.length < 2) {
//     console.log('Введенная строка слишком короткая')
// } else {
//     console.log(word.slice(-2))
// }


// let text = prompt()

// text = text.toLowerCase().split('').reverse().join('')

// console.log(text)


// let num = prompt()

// if (isNaN(num)) {
//     console.log('Вы ввели не число')
// } else {
//     console.log('Вы ввели число')
// }


// let age = prompt()

// if (!isNaN(age)) {
//     if (age >= 18 && age <= 65) {
//         console.log('Доступ разрешен')
//     } else {
//         console.log('Доступ запрещен')
//     }
// } else {
//     console.log('Ошибка: Введите ваш возраст')
// }


// let number = parseInt(prompt())

// if (number < 0) {
//     number = number * -1
// }

// console.log(`Квадратный корень из ${number} равен ${Math.sqrt(number)}`)


// let r = parseInt(prompt())
// let S = Math.PI * Math.pow(r, 2)
// let S3 = Math.pow(S, 3)
// console.log(Math.round(S3))
