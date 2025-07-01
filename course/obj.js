let name = "Смартфон Galaxy S21";

let price = 89990;

let brand = "Samsung";

let product1 = {
    name,
    price,
    brand,
};

let product2 = {
  name: "Айфон XR",
  price: 119900,
  brand: "Apple"
};

console.log(product1.name, "стоит", product2.name, ", а", product1.brand, "стоит", product2.price + 100);


let place = prompt()
let date = prompt()
let lengthTrip = prompt()

let trip = {
    place,
    date,
    lengthTrip
}

console.log(`${trip.date} вы отправляетесь в ${trip.place} на ${trip.lengthTrip} дней`)


let name = prompt()
let author = prompt()
let date = prompt()

let book = {
    name,
    author,
    date
}

console.log(`Название книги: ${book.name}`)
console.log(`Автор книги: ${book.author}`)
console.log(`Год издания книги: ${book.date}`)


const catalogue = {
    magazine: 5,
}

catalogue.magazine = parseInt(prompt())

if (catalogue.magazine >= 10 && catalogue.magazine <= 50) {
    console.log(catalogue.magazine)
} else {
    console.log('Введите число в диапазоне от 10 до 50 включительно')
}


let a = parseInt(prompt())
let b = parseInt(prompt())

let obj = {
    start: function(a, b) {
        console.log(a % b)
    }
}

obj.start(a, b)


const balance = Number(prompt())
let bankAccount = {
  balance,
  checkBalance: function(balance) {
    console.log(`Ваш текущий баланс: ${balance} долларов`)
  }
};
bankAccount.checkBalance(balance);


let Y = Number(prompt());
const calculator = {
    base: Y - 2,
    power: function(Y) {
        console.log(calculator.base ** Y)
    }
};
calculator.power(Y);

let bankAccount = {
  balance: 500,

  deposit: function(amount) {
    console.log(bankAccount.balance + amount)
  },

  withdraw: function(amount) {
    console.log(bankAccount.balance - amount)
  },
};

const amount = Number(prompt());
const choice = prompt()

if (choice === "внести" && bankAccount.balance >= amount) {
    bankAccount.deposit(amount)
} else if (choice === "снять" && bankAccount.balance >= amount) {
    bankAccount.withdraw(amount)
} else {
    console.log('Недостаточно средств на счете')
}
