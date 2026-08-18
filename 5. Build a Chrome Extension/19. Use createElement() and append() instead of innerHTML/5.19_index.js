let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

// Let's try a different method!
for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += `<li>${myLeads[i]}</li>`
    // Break above code into following:

    // Create element
    const li = document.createElement("li")

    // Set text content
    li.textContent = myLeads[i]

    // Append to ul
    ulEl.append(li)
}