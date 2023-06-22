function taskOne() {
    const number = prompt("Print number")
    console.log(number * 0.1);
}

function taskTwo() {
    function returnNumber(a, b) {
        return a > b ? a : b;
    }

    const numberOne = prompt("Print 1st number")
    const numberTwo = prompt("Print 2nd number")

    const result = returnNumber(numberOne, numberTwo)
    console.log(result);
}

function taskThree() {
    const number = prompt("Print number")

    if (number > 100) {
        console.log("Число больше 100");
    } else if (number < 100) {
        console.log("Число меньше 100");
    } else {
        console.log("Число равно 100");
    }
}

function taskFour() {
    const name = prompt("Print ur name")
    const age  = prompt("Print ur age")

    console.log(`${age >= 18 ? "Hello" : "Hi"}, ${name}`);
}