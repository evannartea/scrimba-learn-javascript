let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&
function spookyFace() {
    if (dayOfMonth === 13 && weekday === "Friday") {
        return "😱"
    }
}

console.log(spookyFace())
