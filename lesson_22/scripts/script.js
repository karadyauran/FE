// const numbersContainer = document.querySelector('.numbers')
// const resetCode = () => {
//     const cards = document.querySelectorAll('.card')
//     for (let i = 0; i < cards.length; i++) {
//         cards[i].classList.remove('active')
//     }
// }

// let code = ''

// const getCode = (number) => {
//     code += number

//     if (code.length === 10) {
//         console.log(code)
//         if (code === '0123456789') {
//             alert('Доступ разрешен')
//         } else {
//             resetCode()
//             code = ''
//         }
//     }
// }

// for (let i = 0; i < 10; i++) {
//    const cardDiv = document.createElement('div')
//    cardDiv.innerText = i 
//    cardDiv.classList.add(i, 'card')
//    numbersContainer.append(cardDiv)

//    cardDiv.addEventListener('click', () => {
//         cardDiv.classList.toggle('active')
//         getCode(cardDiv.classList[0])
//    })
// }

// const divElem = document.createElement('div')
// divElem.style.width = '100px'
// divElem.style.height = '100px'
// divElem.style.border = '2px solid black'
// divElem.style.margin = '10px'
// document.body.append(divElem)

// // Создать квадратный div и при наведении курсора на него цвет div-а рандомно меняется

// divElem.addEventListener('mouseover', () => {
//     let r = Math.floor(Math.random() * 255)
//     let g = Math.floor(Math.random() * 255)
//     let b = Math.floor(Math.random() * 255) 

//     divElem.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// })

// divElem.addEventListener('mouseout', () => {
//     divElem.style.backgroundColor = 'white'
// })

// for (let i = 0; i <= 255; i++){
//     const divElem = document.createElement('div')
//     divElem.style.height = '100px'
//     divElem.style.backgroundColor = `rgb(255, ${i}, ${i})`
//     document.body.append(divElem)
// }


// const square = document.createElement('div')
// square.style.width = '1000px'
// square.style.height = '700px'
// square.style.backgroundColor = 'black'
// square.style.display = 'flex'
// document.body.append(square)

// function generateCircle(square) {
//     const circle = document.createElement('div')
//     circle.style.cursor = 'pointer'
//     circle.style.width = '50px'
//     circle.style.height = '50px'
//     circle.style.backgroundColor = 'white'
//     circle.style.borderRadius = '50%'
//     circle.style.position = 'relative'
//     circle.style.left = `${Math.floor(Math.random() *  900)}px`
//     circle.style.top = `${Math.floor(Math.random() *  600)}px`
//     square.appendChild(circle)

//     circle.addEventListener('click', () => {
//         square.removeChild(circle);
//         generateCircle(square);
//     });    
// }

// generateCircle(square)

