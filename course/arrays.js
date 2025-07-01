// let users = []
// let user1 = prompt()
// let user2 = prompt()
// let user3 = prompt()

// users.unshift(user1, user2, user3)

// console.log(`${users[0]} и ${users[2]}`)


// const numElements = Number(prompt("Введите количество элементов в массиве:"));
// const userArray = [];

// for (let i = 0; i < numElements; i++) {
//     userArray.unshift(prompt())
// }

// console.log(userArray);


// const daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// const users = [
//   { id: 1, name: "Иван", age: 30 },
//   { id: 2, name: "Мария", age: 25 },
//   { id: 3, name: "Алексей", age: 35 },
//   { id: 4, name: "Елена", age: 28 },
// ];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// const combinedArray = [...daysOfWeek, ...users, ...months];

// console.log(combinedArray);


// const capitals = [
//   "Токио", "Афины", "Нью-Дели", "Сеул", "Джакарта", "Багдад", "Астана", "Москва", "Анкара"
// ];

// const newCapitals = capitals.filter(city => city.startsWith('А'))

// console.log(newCapitals)


// const userInput = prompt()
// const capitals = userInput.split(' ')

// if (capitals.includes('Андорра-Ла-Велла')) {
//     const filtredCapitals = capitals.filter(city => city.endsWith('а'))
//     console.log(filtredCapitals)
// } else {
//     const filtredCapitals = capitals.filter(city => city.endsWith('н'))
//     console.log(filtredCapitals)
// }


// const userInput = prompt()
// const array = userInput.split(' ')

// const newArray = array.map((element) => {
//     let newElement = element.toUpperCase()
//     return newElement
// })

// console.log(newArray)


// const userInput = prompt()
// const array = userInput.split(', ')

// const newArray = array.map(element => `Пока, ${element}`)

// console.log(newArray)


const cities = ["Москва", "Санкт-Петербург", "Саратов", "Магадан", "Ярославль", "Самара", "Якутск"];
const userInput = prompt()

if (cities.includes(userInput)) {
    const firstLetter = userInput[0]
    const sameLetterCities = cities.filter(city => city.startsWith(firstLetter))
    console.log(`Города, начинающиеся с буквы "${firstLetter}": ${sameLetterCities.join(', ')}`)
} else {
    console.log('Такого города нет в списке')
}
