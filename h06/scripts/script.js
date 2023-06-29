function taskOne () {
    for (let i = 0; i <= 10; i += 2) {
        console.log(i)
    }
}

function taskTwo() {
    for (let i = 55; i >= 20; i--) {
        console.log(i)
    }
}

function taskThree() {
    const numbers = [3, 5, 11, 2, 8, 1, 6]
    let numbers_squared = []
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
        numbers_squared.push(numbers[i] ** 2)
    }

    console.log(numbers_squared)
    const last_elem = numbers_squared.slice(-1)
    console.log(last_elem)
}

function taskFour() {
    const user = {
        first_name: 'Ivan', 
        last_name: 'Ivanov', 
        age: 20, 
        salary: 500
    }

    console.log(`User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`)
}

console.log("Task one")
taskOne()
console.log("\n\n")

console.log("Task two")
taskTwo()
console.log("\n\n")

console.log("Task three")
taskThree()
console.log("\n\n")

console.log("Task four")
taskFour()
console.log("\n\n")