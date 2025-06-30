function minecraft() {
    let num = parseInt(prompt())
    console.log(num**2)
}

minecraft()

let name = 'Sasha'
let age = 21

function hello(name, age) {
    console.log(`Привет, ${name}. Тебе ${age} лет.`)
}

hello(name, age)

let num1 = parseInt(prompt())
let num2 = parseInt(prompt())

function compare(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} больше, чем ${num2}`)
    } else if (num1 < num2) {
        console.log(`${num2} больше, чем ${num1}`)
    } else {
        console.log(`${num1} равно ${num2}`)
    }
}

compare(num1, num2)

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

let x = parseInt(prompt())
let y = parseInt(prompt())
let z = parseInt(prompt())
let cry

function Normi(a, b, c) {
    cry = (a + b + c)/3
    return cry
}

Normi(x, y, z)

console.log(cry * 2)

let num1 = parseInt(prompt())
let num2 = parseInt(prompt())
let num3 = parseInt(prompt())
let num4 = parseInt(prompt())
let result1
let result2

function calculateAverage(x, y, z, n) {
    result1 = (x + y)/2
    result2 = (z + n)/2
    return result1, result2
}

function compareAvarage(a, b) {
    if (a > b) {
        console.log('Среднее значение первого набора больше')
    } else if (a < b) {
        console.log('Среднее значение второго набора больше')
    } else {
        console.log('Средние значения наборов равны')
    }
}

calculateAverage(num1, num2, num3, num4)
compareAvarage(result1, result2)

let x = parseInt(prompt())
let y = parseInt(prompt())
let z = parseInt(prompt())

function checkTriangleExistence(x, y, z) {
    if (x >= y + z || y >= x + z || z >= x + y) {
        return console.log('Треугольник не существует')
    } else {
        return console.log('Треугольник существует')
    }
}

checkTriangleExistence(x, y, z)

let a = 5
let isEven = a => a % 2 === 0

console.log(isEven(a))

let num = parseInt(prompt())

let cube = num => {
    console.log(num ** 3)
}

cube(num)

let S = parseFloat(prompt())
let h = parseFloat(prompt())
let figure = prompt()

let calculateCylinderVolume = (S, h) => {
    let volume = S * h
    console.log(`Объем цилиндра: ${volume}`)
}

let calculateConeVolume = (S, h) => {
    let volume = (S * h)/3
    console.log(`Объем конуса: ${volume}`)
}

if (figure == 'цилиндр') {
    calculateCylinderVolume(S, h)
} else if (figure == 'конус') {
    calculateConeVolume(S, h)
} else {
    console.log('Неккоректно введены данные')
}
