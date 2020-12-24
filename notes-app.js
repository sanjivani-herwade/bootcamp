// DOM = Document Object Model
// const p = document.querySelector('p')
// console.log(p)
// p.remove()

// Query all and remove
const p = document.querySelectorAll('p')
    ps.forEach = (function (p) {
        p.textContent = '******'
       // console.log(p.textContent)
        // p.remove()

    })
// Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'this is a new element from javascript'
document