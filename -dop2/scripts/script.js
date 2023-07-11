for (let i = 0; i <= 255; i++){
    const divElem = document.createElement('div')
    divElem.style.height = '100px'
    divElem.style.backgroundColor = `rgb(128, 128, ${i})`
    document.body.append(divElem)
}

const divElems = document.querySelectorAll('div')
console.log(divElems.length)