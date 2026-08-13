// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
let name = "Gio"
let greeting = "Welcome back"

// and the greeting we want to render on the page
let myGreeting = `${greeting}, ${name}!`
console.log(myGreeting)

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = myGreeting