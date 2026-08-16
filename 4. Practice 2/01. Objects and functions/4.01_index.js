// Create a person object that contains three keys: name, age, and country.
// Use yourself as an example to set the values
let person = {
    name: "Gio",
    age: 26,
    country: "UK"
}

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"
function logData() {
    let string = `${person.name} is ${person.age} years old and lives in the ${person.country}`
    return string
}

// Call the logData() function to verify that it works
console.log(logData())