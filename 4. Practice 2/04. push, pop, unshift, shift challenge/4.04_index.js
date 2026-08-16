let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places
// Correct list: ["China","India","USA","Indonesia","Pakistan"]

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
largeCountries.pop()
largeCountries.push("Pakistan")

largeCountries.shift()
largeCountries.unshift("China")

console.log(largeCountries)