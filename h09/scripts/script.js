// Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.


const task1 = () => {
    const divElem    = document.createElement('div')
    const buttonElem = document.createElement('button')

    divElem.style = 'width: 200px; height: 200px; background-color: red;'
    buttonElem.innerText = 'Change color'

    document.body.append(divElem, buttonElem)

    buttonElem.addEventListener('click', () => {
        divElem.style.backgroundColor = 'green'
        divElem.style.width = '100px'
        divElem.style.height = '100px'
    })
}

// Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

const task2 = () => {
    const divElem    = document.createElement('div')
    const buttonElem = document.createElement('button')

    divElem.style = 'width: 200px; height: 200px; background-color: pink;'
    buttonElem.style = 'width: 200px; height: 200px;'
    buttonElem.innerText = 'Change color'

    document.body.append(divElem, buttonElem)

    buttonElem.addEventListener('click', () => {
        const color = 'blue'
        divElem.style.backgroundColor = color
        console.log(`Updated color : ${color}`)
    })
}

// Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

const task3 = () => {
    const divElem    = document.createElement('div')
    const buttonElem = document.createElement('button')

    divElem.style = 'width: 150px; height: 150px; background-color: pink;'
    buttonElem.style = 'width: 150px; height: 150px;'
    buttonElem.innerText = 'Change size'

    document.body.append(divElem, buttonElem)

    buttonElem.addEventListener('click', () => {
        const width  = divElem.offsetWidth
        const height = divElem.offsetHeight

        divElem.style.width = `${width + 20}px`
        divElem.style.height = `${height + 20}px`
    })
}

// Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

const task4 = () => {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};':,.<>/?".split('')

    const buttonElem = document.createElement('button')
    const divElem    = document.createElement('div')

    buttonElem.innerText = 'Generate new password'

    divElem.classList.add('root')

    document.body.append(buttonElem, divElem)

    buttonElem.addEventListener('click', () => {
        const pElem = document.createElement('p')
        pElem.innerText = (() => {
            let text = ''

            for (let i = 0; i < 10; i++){
                let index = Math.floor(Math.random() * str.length)
                text += str[index]
            }

            return text
        })()

        pElem.style.color = 'blue'

        divElem.append(pElem)
    })
}

// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

const task5 = () => {

    // Функция, генерирующая новый уникальный пароль
    const generatePassword = (count) => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};':,.<>/?".split('')
        let completePassword = ''

        for (let i = 0; i <= count; i++) {
            let index = Math.floor(Math.random() * characters.length)
            completePassword += characters[index]
        }

        return completePassword
    }

    // Создание кнопки
    const createPasswordButton = document.createElement('button')
    createPasswordButton.innerText = 'Generate password'
    createPasswordButton.style.width = '120px'
    createPasswordButton.style.height = '70px'
    createPasswordButton.style.marginBottom = '10px'
    document.body.append(createPasswordButton)

    // Создание div элемента
    const divElement = document.createElement('div')
    divElement.classList.add('root')
    document.body.append(divElement)

    // Создание обработчика для кнопки
    createPasswordButton.addEventListener('click', () => {
        // Получание цвета последнего p элемента и присвоение переменной pElementColor противоположный цвет
        const paragraphs = document.querySelectorAll('p');
        const lastParagraphColor = paragraphs.length > 0 ? paragraphs[paragraphs.length - 1].style.color : '';
        let pElementColor = lastParagraphColor === 'blue' ? 'green' : 'blue'

        // Создание p элемента
        const pElement = document.createElement('p')
        pElement.innerText = generatePassword(10)
        pElement.style.color = pElementColor
        divElement.append(pElement)
    })
}