// Создать параграф, задать ему текст и добавить в HTML-документ в div с #root

// Get and create elements
// const pElem = document.createElement('p')
// const root  = document.querySelector('#root')

// Do paste elements to main element
// pElem.innerText = 'I am root'
// root.append(pElem)

// for (let i = 0; i <= 19; i++) {
//     const number = document.createElement('p')
//     number.innerText = i
//     document.body.append(number)
// }

// Paste words from array to #root
// const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit']
// const root  = document.querySelector('#root')

// for(let i = 0; i < words.length; i++) {
//     const elem = document.createElement('p')
//     elem.innerText = words[i]
//     root.append(elem)
// }

//https://www.youtube.com/watch?v=Z5WPWf-c9W4&ab_channel=CarSpotterQVS
//https://i.ytimg.com/vi/Z5WPWf-c9W4/maxresdefault.jpg

// const imgLink = prompt('Send me img link')
// const articleLink = prompt('Send me the text of article')

// const main = document.querySelector('.main')
// const div = document.createElement('div')
// const img = document.createElement('img')
// const a = document.createElement('a')

// img.setAttribute('src', imgLink)
// a.setAttribute('href', articleLink)
// a.innerText = 'Link >>'


// main.append(div)
// div.append(img, a)

// Массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в #root.

// const links = [
//     {
//         link: "https://google.com",
//         title: "Google"
//     },
//     {
//         link: "https://facebook.com",
//         title: "Facebook"
//     },
//     {
//         link: "https://github.com",
//         title: "GitHub"
//     },
//     {
//         link: "https://youtube.com",
//         title: "YouTube"
//     }
// ]

// const root  = document.querySelector('#root')

// for (let i = 0; i < links.length; i++) {
//     const {link, title} = links[i]
//     const a = document.createElement('a')
//     a.setAttribute('href', link)
//     a.innerText = title
//     root.append(a)
// }

//https://www.youtube.com/watch?v=Z5WPWf-c9W4&ab_channel=CarSpotterQVS
//https://i.ytimg.com/vi/Z5WPWf-c9W4/maxresdefault.jpg

// function createPostCard(imgsrc, posthef){
//     const div = document.createElement('div')
//     const img = document.createElement('img')
//     const a = document.createElement('a')
    
//     img.setAttribute('src', imgsrc)
//     a.setAttribute('href', posthef)
//     a.innerText = 'Link >>'
//     div.append(img, a)

//     return div
// }

// const imgsrc = prompt('Send me img link')
// const posthef = prompt('Send me the text of article')

// const postCard = createPostCard(imgsrc, posthef)

// const main = document.querySelector('.main')
// main.append(postCard)

// Создать множество карточек с товарами (на основе массива с объектами. У объекта свойства title, unit_price, count) 
// Написать скрипт, который выводит карточки с товарами в интерфейс (на основе массива с объектами. У объекта свойства title, unit_price, count), а внизу выводится итоговая сумма товаров и их количество. 

const products = [
    {
        id: 1,
        title: "bicycle",
        unit_price: 45000,
        discount: 10,
        count: 15
    },
    {
        id: 2,
        title: "roller-skates",
        unit_price: 15000,
        discount: 5,
        count: 4
    },
    {
        id: 3,
        title: "kick scooter",
        unit_price: 10000,
        discount: 30,
        count: 5
    },
    {
        id: 4,
        title: "skis",
        unit_price: 25000,
        discount: 10,
        count: 12
    },
    {
        id: 5,
        title: "skate",
        unit_price: 10000,
        discount: 0,
        count: 1
    }
]

const productsContainer = document.querySelector('.products-container')

let totalPrice = 0
let totalCount = 0

for (let i = 0; i < products.length; i++) {
    const {title, unit_price, count} = products[i]
    
    const divElem = document.createElement('div')
    const pTitile = document.createElement('p')
    const pPrice = document.createElement('p')
    const pCount = document.createElement('p')
    const pTotalPice = document.createElement('p')


    pTitile.innerText = `Product title: ${title}`
    pPrice.innerText = `Product price: ${unit_price}`
    pCount.innerText = `Product count: ${count}`
    pTotalPice.innerText = `Product total price: ${count * unit_price}`

    divElem.append(pTitile, pPrice, pCount, pTotalPice)
    productsContainer.append(divElem)

    totalCount += count
    totalPrice += (count * unit_price)
}

const divElem = document.createElement('div')
const pTotalPrice = document.createElement('p')
const pTotalCount = document.createElement('p')

pTotalPrice.innerText = `Total price: ${totalPrice}`
pTotalCount.innerText = `Total price: ${totalCount}`

divElem.append(pTotalPrice, pTotalCount)
productsContainer.append(divElem)