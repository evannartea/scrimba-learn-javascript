let myLeads = `["www.awesomelead.com"]`

// Turn myLeads string into an array
myLeads = JSON.parse(myLeads)

// Push a new value to the array
myLeads.push("example")

// Turn the array into a string again
myLeads = JSON.stringify(myLeads)

// console.log the string using typof to verift that it's a string
console.log(typeof myLeads)
console.log(myLeads)

const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
