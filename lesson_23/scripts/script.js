const formElem = document.querySelector("#product_form")
const productNameInp = document.querySelector(".product_name")
const productPriceInp = document.querySelector(".product_price")
const productsContainer = document.querySelector('.products_container')
const products = []

formElem.addEventListener("submit", (event) => {
    event.preventDefault()

    const productObject = {
        name: productNameInp.value,
        price: productPriceInp.value
    }

    products.push(productObject)

    rerender()
    
    formElem.reset()
})

// Добавить функцию, которая получает наименование карточки и цену и возвращает HTML элемент с карточкой товара.

function createProductCard (name, price) {
    const productItem = document.createElement('div')
    productItem.classList.add('product-item')
    const productName = document.createElement('p')
    const productPrice = document.createElement('p')

    productName.innerText = name
    productPrice.innerText = `${price} $`

    productItem.append(productName, productPrice)
    
    return productItem
}

// Разработать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с товарами из массива. Настроить rerender при добавлении нового продукта.

function rerender() {
    productsContainer.innerHTML = ''

    for (let i = 0; i < products.length; i++) {
        const {name, price} = products[i]
        const productElement = createProductCard(name, price)
        productsContainer.append(productElement)

        // Доработать rerender таким образом, чтобы при двойном клике по карточке в консоль выводилось название товар.

        productElement.addEventListener('dblclick', () => {
            console.log(name)
        })
    }
}