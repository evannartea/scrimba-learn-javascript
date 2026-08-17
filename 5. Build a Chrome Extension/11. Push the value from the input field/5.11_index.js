let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")

inputBtn.addEventListener("click", function() {
    // Push the value from the inputEl into the myLeads array
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputEl.value)

    console.log(myLeads)
})