let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.querySelector("#apple-shelf")
let orangeShelf = document.querySelector("#orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function sortFruits() {
    for (i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        }
        else {
            orangeShelf.textContent += "🍊"
        }
    }
}

sortFruits()