// const printHello = (username) => {
//     console.log(`Hello, ${username}!`)
// }

// const printBye = (username) => {
//     console.log(`Bye, ${username}!`)
// }

// const printHowAreYou = (username) => {
//     console.log(`How are you, ${username}?`)
// }

// const doWithUser = (username, callback) => {
//     callback(username)
// }

// doWithUser("John", printHello)
// doWithUser("John", printBye)
// doWithUser("John", printHowAreYou)

// Написать функцию forEach, которая принимает в качестве первого аргумента массив, а в  качестве второго функцию и вызывает принятую функцию для каждого элемента массива.

// const printElem = (elem) => {
//     console.log(elem)
// }

// const returnEven = (number) => {
//     if (number % 2 === 0) {
//         console.log(number)
//     }
// }

// const forEach = (arr, callback) => {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i])
//     }
// }

// const arr = [1, 5, 2, 4, 8, 9, 10]

// forEach(arr, returnEven)

// Переделать кнопку таким образом, чтобы при нажатии на нее в параграфе в интерфейсе значение увеличивалось на 1. В начале рассмотрите процесс, при котором мы каждый раз считываем число из параграфа, меняем и записываем обратно, а потом переделайте процесс так, чтобы значение хранилось в переменной, изменялось при клике и записывалось в параграф.

// const btn = document.querySelector('button')
// const p = document.querySelector('p')
// let counter = 0

// const incr = () => {
//     counter++
//     p.innerHTML = counter
// }

// btn.addEventListener('click', incr)

// Написать программу, которая создает две кнопки и вешает на них событие нажатия. При нажатии на плюс в консоль выводится число, увеличивающееся на 1, а при нажатии на минус - уменьшившееся на 1.

// let counter = 0

// const buttonPlus = document.createElement('button')
// const buttonMinus = document.createElement('button')

// buttonPlus.innerText = '+'
// buttonMinus.innerText = '-'

// document.body.append(buttonPlus, buttonMinus)

// buttonPlus.addEventListener('click', () => {
//     counter++
//     console.log(counter)
// })

// buttonMinus.addEventListener('click', () => {
//     counter--
//     console.log(counter)
// })

// let styleLeft = 0
// let styleTop = 0

// const point = document.createElement('div')
// point.style = 'width: 10px; height: 10px; background-color: red; position: absolute; left: 0; top: 0'
// document.body.append(point)

// const moveLeft = () => {
//     styleLeft--
//     point.style = `width: 10px; height: 10px; background-color: red; position: absolute; left: ${styleLeft}px; top: ${styleTop}px`
// }

// const moveTop = () => {
//     styleTop--
//     point.style = `width: 10px; height: 10px; background-color: red; position: absolute; left: ${styleLeft}px; top: ${styleTop}px`
// }

// const moveRight = () => {
//     styleLeft++
//     point.style = `width: 10px; height: 10px; background-color: red; position: absolute; left: ${styleLeft}px; top: ${styleTop}px`
// }

// const moveBottom = () => {
//     styleTop++
//     point.style = `width: 10px; height: 10px; background-color: red; position: absolute; left: ${styleLeft}px; top: ${styleTop}px`
// }

// addEventListener("keypress", (event) => {
//     console.log(event.code)
//     if (event.code === 'KeyA') {
//         moveLeft()
//     } else if (event.code === 'KeyW') {
//         moveTop()
//     } else if (event.code === 'KeyD') {
//         moveRight()
//     } else if (event.code === 'KeyS') {
//         moveBottom()
//     }
// });

// let code = ''

// addEventListener('keypress', (event) => {
//     if (code.length === 5) {
//         code = ''
//     }

//     code += event.key 

//     if (code === 'hello') {
//         console.log('Hi, agent!')
//     }
// })

// const pElem = document.querySelector('pre')
// document.addEventListener('keypress', (event) => {
//     console.log([event])
// })

// function add(callback) {
//     const obj = {
//         name: "John",
//         surname: "Smtih"
//     }

//     callback(obj)
// }

// add((param) => {
//     console.log(param);
// })

// const createNewPreElement = () => {
//     const preElem = document.createElement('pre')
//     preElem.innerText = 'localhost:~# '
//     document.body.append(preElem)
// }

// createNewPreElement()

// document.addEventListener('keyup', (event) => {
//     console.log(event)
//     const preElem = document.querySelectorAll('pre')

//     if (event.key === 'Enter') {
//         createNewPreElement()
//     }

//     if (event.key === 'Backspace') {
//         if (preElem.innerText[preElem.length - 1] !== 'localhost:~# '){
//             console.log(preElem.innerText[preElem.length - 1])
//             let text = preElem[preElem.length - 1].innerText.replace(/.$/,'')
//             preElem[preElem.length - 1].innerText = text
//         }
//     }

//     if (event.key.length <= 1) {
//         preElem[preElem.length - 1].innerText += event.key
//     }

// })

// document.addEventListener('click', (event) => {
//     console.log(event)
// })

// Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки.

// const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit']

// for (let i = 0; i < words.length; i++) {
//     const pElem = document.createElement('p');
//     pElem.innerText = words[i];
//     document.body.append(pElem);

//     pElem.addEventListener('click', (event) => {
//         event.target.innerText = '*'.repeat(event.target.innerText.length);
//     });
// }
  
// В js объявлен массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере. Так, пользователь нажимая на маленькие картинки видит их отображение в большем размере.

const imagesContainer = document.querySelector('.images')
const previewContainer = document.querySelector('.preview img')
const links = [
    'https://i.auto-bild.de/ir_img/3/0/7/4/1/7/1/M5_1-923bda98c25ac020.jpg',
    'https://www.autozeitung.de/assets/field/image/bmw-m5-1998-01.jpg',
    'https://all-car-news.com/wp-content/uploads/2022/11/bmw_m5_8395.jpg',
    'https://imgr1.auto-motor-und-sport.de/BMW-M5-Querbeschleunigung-169FullWidth-df9f6233-552806.jpg',
    'https://i.auto-bild.de/ir_img/1/3/2/8/0/0/7/BMW-M5-F90-2017-Test-Infos-und-Bilder-1200x800-cc63bfc935f3671e.jpg'
]

for (let i = 0; i < links.length; i++) {
    const imgElem = document.createElement('img')
    imgElem.setAttribute('src', links[i])
    imagesContainer.append(imgElem)

    imgElem.addEventListener('click', (event) => {
        previewContainer.setAttribute('src', event.target.currentSrc)
    })
}