// function minecraft() {
//     let num = parseInt(prompt())
//     console.log(num**2)
// }

// minecraft()

// let name = 'Sasha'
// let age = 21

// function hello(name, age) {
//     console.log(`Привет, ${name}. Тебе ${age} лет.`)
// }

// hello(name, age)

// let num1 = parseInt(prompt())
// let num2 = parseInt(prompt())

// function compare(num1, num2) {
//     if (num1 > num2) {
//         console.log(`${num1} больше, чем ${num2}`)
//     } else if (num1 < num2) {
//         console.log(`${num2} больше, чем ${num1}`)
//     } else {
//         console.log(`${num1} равно ${num2}`)
//     }
// }

// compare(num1, num2)

let num1 = parseFloat(prompt())
let num2 = parseFloat(prompt())
let num3 = parseFloat(prompt())
let num4 = parseFloat(prompt())

function compareAndPrintMax(num1, num2, num3, num4) {
    let max = num1

    if (num2 > max) max = num2
    if (num3 > max) max = num3
    if (num4 > max) max = num4

    console.log(max)
}

compareAndPrintMax(num1, num2, num3, num4)
