const formElem = document.querySelector("#product_form")
const productNameInp = document.querySelector(".product_name")
const productPriceInp = document.querySelector(".product_price")
const productsContainer = document.querySelector('.products_container')
let products = []

formElem.addEventListener("submit", (event) => {
    event.preventDefault()

    const productObject = {
        name: productNameInp.value,
        price: +productPriceInp.value
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

// Добавить функцию, которая возвращает кнопку в виде крестика в красном кружке.

function createRemoveBtn () {
    const removeElement = document.createElement('div')
    removeElement.classList.add('remove')
    removeElement.innerText = 'X'
    return removeElement
}

// Разработать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с товарами из массива. Настроить rerender при добавлении нового продукта.

function rerender() {
    productsContainer.innerHTML = ''

    if (products.length === 0) {
        const h1Elem = document.createElement('h1')
        h1Elem.innerText = 'Товаров  нет'
        productsContainer.append(h1Elem)

        return 
    }

    for (let i = 0; i < products.length; i++) {
        const {name, price} = products[i]
        const productElement = createProductCard(name, price)
        const removeBtn = createRemoveBtn()
        productElement.append(removeBtn)
        productsContainer.append(productElement)


        // Доработать rerender таким образом, чтобы при двойном клике по карточке в консоль выводилось название товар.

        productElement.addEventListener('dblclick', () => {
            console.log(name)
        })

        // Удалить элемент

        removeBtn.addEventListener('click', () => {
            rerender()
            products.splice(i, 1)
        })
    }
}

// Реализовать скрипт, который получает из формы строку при submit и выводит в консоль.
// Меняем вызов обработчика формы с submit на change и убираем кнопку из формы.
// Сделать сортировку товаров по названию по нажатию по кнопке.
// Сделать сортировку товаров по цене по нажатию на кнопку.

const productsFilterForm = document.querySelector('#products-filter-form')
const productSearchText = document.querySelector('.product_search_text')
const productSortSelect = document.querySelector('#product_sort')

productsFilterForm.addEventListener('change', (event) => {
    event.preventDefault()

    if (productSortSelect.value === 'name') {
        // Сортировка по названию 
        products = products.sort((a, b) => {
            if (a.name === b.name) {
                return 0
            } else if (a.name > b.name) {
                return 1
            } else if (a.name < b.name) {
                return -1
            }
        })

        rerender()
    } else if (productSortSelect.value === 'price') {
        // Сортировка по цене 
        products = products.sort((a, b) => {
            if (a.price === b.price) {
                return 0
            } else if (a.price > b.price) {
                return 1
            } else if (a.price < b.price) {
                return -1
            }
        })

        rerender()
    }

    if (productSearchText.value !== '') {
        products = products.filter((productObject) => {
            return productObject.startsWith(productSearchText.value)
        })
        rerender()
    }
})

