
let cars = [
    {
        name: "malibu",
        price: 31000
    },
    {
        name: "nexia",
        price: 12000
    },
    {
        name: "onix",
        price: 21000
    },
    {
        name: "tahoe",
        price: 100000
    },
    {
        name: "cobalt",
        price: 13000
    },
    {
        name: "tracker",
        price: 26000
    },
    {
        name: "kia k5",
        price: 43000
    },
    {
        name: "santafe",
        price: 50000
    },
    {
        name: "elantra",
        price: 35000
    },
    {
        name: "tico",
        price: 2500
    }
]
// 1
/* let from = +prompt('min cost of a car') // 10000
let to = +prompt('max cost of a car') // 40000
let result = []
result = cars.filter((car) => from <= car.price && car.price <= to)
if (from <= to && from > 0 && to > 0) {
    console.log(result)
} else {
    alert('Error!')
} */
// 2
// какую вы из этих машин купите?
/* let options = prompt('Which car would you like to purchase?' + result.map(item => item.name))
let optResult = []
optResult = cars.find((car) => car.name == options)
console.log(optResult)
if(optResult) {
    let ask = +prompt('Please, enter your credit card number to pay for the car')
} else {
    alert('Error!')
} */
// если выбирает конкретную машину то следующий промпт с просьбой оплатить стоимость этой машины

// 3
// Найти самое короткое имя 
let container = ""

cars.forEach(car => {
    if (car.name.length > container.length) {
        container = car.name
    }
})

cars.forEach(car => {
    if (car.name.length < container.length) {
        container = car.name
    }
})

console.log(container)
// 4
// Найти самую дорогую машину
let price = []
cars.forEach(car => {
    price.push(car.price)
})
let maxValue = Math.max.apply(Math, price)
console.log(maxValue)
// 5
// Найти среднюю цену из всех машин
let total = cars.reduce((a, b) => a + b.price, 0)
let count = cars.length
let result = total / count
console.log(result) 