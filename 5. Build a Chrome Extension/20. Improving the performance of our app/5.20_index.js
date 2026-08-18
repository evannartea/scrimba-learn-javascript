let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

// Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = ""

for (let i = 0; i < myLeads.length; i++) {
    // Add the item to the listItems variable instead of the ulEl.innerHTML
    listItems += `<li>${myLeads[i]}</li>`
    console.log(listItems)
}

// Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML =  listItems