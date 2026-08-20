// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.


// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    let string = `The ${arr.length} ${desc} are `

    for (i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            string += arr[i]
        }
        else {
            string += `${arr[i]}, `
        }
    }

    return string
}

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"
let largestCountries = generateSentence("largest countries", ["China", "India", "USA"])
console.log(largestCountries)

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"
let bestFruits = generateSentence("best fruits", ["Apples", "Bananas"])
console.log(bestFruits)