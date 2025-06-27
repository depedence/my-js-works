let price = 2000
let status = 'standart'
let sale

if (price > 1000) {
    if (status == 'VIP') {
        sale = (price / 100) * 10
        console.log( price - sale )
    } else if (status == 'standart') {
        sale = (price / 100) * 5
        console.log( price - sale )
    }
} else if (price <= 1000) {
    console.log( price )
}

let weight = 4
let status = 'абоба'
let price

if (weight <= 5) {
    if (status == 'экспресс') {
        price = 1000
        console.log(`Стоимость доставки: ${price} рублей`)
    } else if (status == 'обычная') {
        price = 500
        console.log(`Стоимость доставки: ${price} рублей`)
    } else {
        console.log('Некорректный статус доставки')
    }
} else if (weight > 5) {
    if (status == 'экспресс') {
        price = 1500
        console.log(`Стоимость доставки: ${price} рублей`)
    } else if (status == 'обычная') {
        price = 800
        console.log(`Стоимость доставки: ${price} рублей`)
    } else {
        console.log('Некорректный статус доставки')
    }
}

let month
let weather

if (month == 12 || 1 || 2) {
    if (weather <= -25) {
        console.log('холодная зима')
    } else {
        console.log('зима')
    }
} else if (month == 3 || 4 || 5) {
    if (weather < 15) {
        console.log('прохладная весна')
    } else {
        console.log('Весна')
    }
} else if (month == 6 || 7 || 8) {
    if (weather >= 30) {
        console.log('Жаркое лето')
    } else {
        console.log('Лето')
    }
} else if (month == 9 || 10 || 11) {
    if (weather < 0) {
        console.log('прохладная осень')
    } else {
        console.log('Осень')
    }
}
