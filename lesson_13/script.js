// Пройдитесь циклом по массиву объектов и найдите общую сумму товаров.

// Вывести названия товаров и цену со скидкой. В процессе решения задачи используйте деструктурирующее присваивание
// Создать новый пустой массив. Пройтись циклом по массиву с продуктами и в новый массив добавить те продукты, которые дешевле определенной суммы.


const products = [
    {
        name: "Macbook",
        price: 1200,
        type: "Laptop",
        discount: 13
    },
    {
        name: "Blender",
        price: 200,
        type: "Kitchen",
        discount: 42
    },
    {
        name: "Bicycle",
        price: 1000,
        type: "Sport",
        discount: 5
    },
    {
        name: "iPhone",
        price: 1500,
        type: "Telephone",
        discount: 5
    },
    {
        name: "TV",
        price: 500,
        type: "Electronic",
        discount: 10
    },
    {
        name: "AirPods Pro",
        price: 250,
        type: "Headsets",
        discount: 20
    }
]

let arr = []

for (let i = 0; i < products.length; i++) {
    const {price} = products[i]
    
    if (price < 1000) {
        arr.push(products[i])
    }
}

console.log(arr);