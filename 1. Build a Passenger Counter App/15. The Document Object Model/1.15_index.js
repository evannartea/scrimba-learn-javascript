let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count++
    countEl.innerText = count
}

/*
The Document Object Model is how you use JS to modify a website.

Document - interacting with a HTML document
Object - document is of object data type, e.g., HTML document is a JS object
Model - representation of elements, e.g.,

HTML: <h2 id="count-el">0</h2>
JS: let countEl = document.getElementById("count-el")
 */