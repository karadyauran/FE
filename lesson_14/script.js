// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 

function taskOne (a, b) {
    let min = a > b ? b : a
    let max = a < b ? b : a
    let arr = []

    for(let i = min; i <= max; i++) {
        arr.push(i)
    }

    return arr
}

// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему. 

function taskTwo (a, b) {
    let min = a > b ? b : a
    let max = a < b ? b : a
    let arr = []

    for(let i = max; i >= min; i--) {
        arr.push(i)
    }

    return arr
}

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.

function taskThree () {
    let list = [1, 4, 3, 2, 7, 4, 6]
    let sum  = 0

    for (let i = 0; i < list.length; i++) {
        sum += list[i]
    }

    console.log(sum)
}

// В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений. Используя цикл, выведите в консоль сумму положительных чисел.

function taskFour () {
    let list = [1, -4, 3, -2, 7, 4, -6]
    let sum  = 0

    for (let i = 0; i < list.length; i++) {
        if (list[i] > 0){
            sum += list[i]
        }
    }

    console.log(sum)
}

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.

function taskFive () {
    let list = [1, 4, 3, 2, 7, 4, 6]
    let even = 0, odd = 0

    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0){
            even += list[i]
        } else {
            odd += list[i]
        }
    }

    let result = even - odd

    console.log(result)
}

// Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg с соответствующими значениями по массиву.

function taskSix (arr) {
    let min = arr[0]
    let max = arr[0]
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

        if (min > arr[i]){
            min = arr[i]
        }

        if (max < arr[i]){
            max = arr[i]
        }
    }

    let avg = sum / arr.length

    return result = {
        min: min,
        max: max,
        avg: avg
    }
}

// В программе объявлена переменная word со строковым значением. Используя цикл, разверните слово.

function taskSeven(word) {
    let result = ''

    for (let i = word.length - 1; i >= 0; i--) {
        result += word[i];
    }

    return result
}

// Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.

function taskNine() {
    let sum = 0;

    console.time("taskNine"); // Запуск таймера

    for (let i = 0; i <= 50000; i++) {
        if (i % 5 === 0) {
            sum += i;
        }
    }

    console.timeEnd("taskNine"); // Вывод времени выполнения
    console.log(sum);
}

function taskNineTwo() {
    let sum = 0;

    console.time("taskNineTwo"); // Запуск таймера

    for (let i = 0; i <= 50000; i += 5) {
        sum += i;
    }

    console.timeEnd("taskNineTwo"); // Вывод времени выполнения
    console.log(sum);
}

// Задания часть 2

const goods = [
    {
        id: 1,
        title: "bicycle",
        price: 45000,
        discount: 10
    },
    {
        id: 2,
        title: "roller-skates",
        price: 15000,
        discount: 5
    },
    {
        id: 3,
        title: "kick scooter",
        price: 10000,
        discount: 30
    },
    {
        id: 4,
        title: "skis",
        price: 25000,
        discount: 10
    },
    {
        id: 5,
        title: "skate",
        price: 10000,
        discount: 0
    }
]

// Написать цикл, который выводит только названия товаров
// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”
// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”

for (let i = 0; i < goods.length; i++) {
    const {title, price, discount} = goods[i]

    console.log(`Title: ${title}`)
    console.log(`${title} (цена без скидки ${price}$)`)
    console.log(`${title} (цена со скидкой ${price * (1 - discount / 100)}$)`)
}
// Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром (без учета скидки).

function getExpensiveItem (list) {
    let expensiveItem = list[0]

    for (let i = 0; i < list.length; i++) {
        if (list[i].price > expensiveItem.price) {
            expensiveItem = list[i]
        }
    }

    return expensiveItem
}

console.log(getExpensiveItem(goods))