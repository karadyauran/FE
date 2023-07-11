function printInfoAboutUser(name, surname, age, extraparametr) {
  // extraparametr  у нас undefined посколькы во время вызова вызвоа функции мы передали 3 параметра а внтру тела функции мы хотим взят 4ый но его нет
  // extraparametr: undefined;
  console.log({ name, surname, age, extraparametr });
}

const personName = "Vazgen";
const personSurname = "Davtyan";
const personAge = 23;

// // функция которая вызвана на 217 строке получает правильную очередность параметров
// printInfoAboutUser(personName, personSurname, personAge, "а", "б", "c", "d");
// // Функция которая вызвана на 219 получает неправильную очередность поэтому в косноль логе // name: 'Vazgen', surname: 23, age: 'Davtyan'
// printInfoAboutUser(personName, personAge, personSurname, "а");

const passanger = (name, gender = '', tiketNumber = 'кабина') => {
    if (gender.toLowerCase() !== 'мужчина' && gender.toLowerCase() !== 'женщина') {
        tiketNumber = gender
        gender = ''
    }

    console.log({ name, gender, tiketNumber })

    if (gender === '') {
        return `Данный пассажир не может пользоваться данной компанией`
    }

    return `${gender} ${name} сидит на месте ${tiketNumber}`
}

console.log(passanger('Александр', 'мужчина', 'А123'))
console.log(passanger('Александр', 'А123'))
console.log(passanger('Александр', 'мужчина'))