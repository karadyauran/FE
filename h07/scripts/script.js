// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
function returnMax (a, b) {
    return a > b ? a : b
}

// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
function taskTwo (a ,b) {
    const min = a < b ? a : b
    const max = a > b ? a : b

    for (let i = max; i > min; i--) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
function power (n, d = 2) {
    return n ** d
}

// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
function factorial(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i 
    }

    return sum
}

// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
function sumEvenOdd (n, m) {
    let sumEven = 0
    let sumOdd = 0

    for (let i = n; i <= m; i++) {
        if (i % 2 === 0) {
            sumEven += i
        } else {
            sumOdd += i
        }
    }

    return `Sum even = ${sumEven}\nSum odd = ${sumOdd}`
}

// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'
function longString (arr) {
    let longestString = ''

    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 0) {
            return null
        }

        if (arr[i].length > longestString.length) {
            longestString = arr[i]
        } 
    }

    return longestString
}

console.log(returnMax(8, 5))
console.log('----------------------------')
taskTwo(20, 6)
console.log('----------------------------')
console.log(factorial(6))
console.log('----------------------------')
console.log(sumEvenOdd(2, 7))
console.log('----------------------------')
console.log(longString(["apple", "bicycle", "chocolate", "sunshine", "elephant"]))