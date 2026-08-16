let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function getRandomHand() {
    let randomNumber = (Math.floor(Math.random() * 3))
    return hands[randomNumber]
}

console.log(getRandomHand())