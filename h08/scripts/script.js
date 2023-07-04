// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

const task1 = () => {
    const numbersElem = document.querySelector('.numbers')

    for (let i = 0; i >= 50; i -= 10) {
        const pElem = document.createElement('p')
        pElem.innerText = i
        numbersElem.append(pElem)
    }
}

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

const task2 = () => {
    const stringContainer = document.querySelector('.strings_container')
    const str = ['text', 'text2', 'test', 'test3', 'hello']

    for (let i = 0; i < str.length; i++) {
        const pElem = document.createElement('p')
        pElem.innerText = str[i]
        stringContainer.append(pElem)
    }
}

// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const task3 = () => {
    let users = [
        {
            first_name: 'John',
            last_name: 'Doe',
            age: 17
        },
        {
            first_name: 'Jane',
            last_name: 'Smith',
            age: 20
        },
        {
            first_name: 'Alex',
            last_name: 'Johnson',
            age: 25
        },
        {
            first_name: 'Peter',
            last_name: 'Parker',
            age: 16
        },
        {
            first_name: 'John',
            last_name: 'Parker',
            age: 32
        }
    ]

    const cardsContainer = document.querySelector('.users_container')

    for (let i = 0; i < users.length; i++) {
        const {first_name, last_name, age} = users[i]

        if (age >= 18) {
            const divElem = document.createElement('div')

            const firstName =  document.createElement('p')
            const lastName =  document.createElement('p')
            const ageElem =  document.createElement('p')

            firstName.innerText = `First name: ${first_name}`
            lastName.innerText = `Last name: ${last_name}`
            ageElem.innerText = `Age: ${age}`

            divElem.append(firstName, lastName, ageElem)
            cardsContainer.append(divElem)
        }
    }
}