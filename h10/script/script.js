const form = document.querySelector('form')
const firstnameInput = document.querySelector('#name-input')
const lastnameInput = document.querySelector('#lastname-input')
const ageInput = document.querySelector('#age-input')

let users = []

form.addEventListener('submit', (even) => {
    even.preventDefault()

    console.log([firstnameInput.value, lastnameInput.value, ageInput.value])

    users.push({
        firstname: firstnameInput.value,
        lastname: lastnameInput.value,
        age: ageInput.value
    })

    console.log(users)
    rerender(users)
})

function rerender(users){
    const container = document.querySelector('.container')
    container.innerHTML = ""

    for (let i = 0; i < users.length; i++) {
        const {firstname, lastname, age} = users[i]

        const divElement = document.createElement('div')
        const fPElem = document.createElement('p')
        const lPElem = document.createElement('p')
        const aPElem = document.createElement('p')

        fPElem.innerText = firstname
        lPElem.innerText = lastname
        aPElem.innerText = age

        divElement.append(fPElem, lPElem, aPElem)
        container.append(divElement)

        divElement.addEventListener('dblclick', () => {
            users.splice(i, 1)
            rerender(users)
        })
    }
}