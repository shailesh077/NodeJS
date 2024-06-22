// const student = {
//     name: "shailesh",
//     age: 23,
//     Class: "C",
//     subject: "MCA",
//     rollNumber: 58
// }
// console.log(student.name);


// const ages = [33, 34, 35, 17];


// function filterAges(age) {
//     return age >= 18
// }
// const result = ages.filter(filterAges)
// console.log(result)

// const names = ["guddu", "shailesh"]
// const add = names.push(addName)

// function addName() {


// }
// console.log(add)
// console.log(names)


// let age = 18;
// if (age > 18) {
//     console.log("You get a 20% discount!")
// } else if (age > 18 || age <= 65) {
//     console.log("Normal ticket price applies.")

// } else if (age > 65) {
//     console.log("You get a 30% senior discount!")
// }


// let length = 10;
// let width = 10;

// const area = length * width

// console.log(area)

// Create an array called guestList and add names of at least five guests
var guestList = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Function to check if a given name is on the guest list
function checkGuestList(name) {
    // Check if the entered name is on the guest list
    if (guestList.includes(name)) {
        console.log("Welcome to the party, " + name + "!");
    } else {
        console.log("Sorry, you're not on the guest list.");
    }
}

// Example usage:
// Prompt the user to enter a name
var name = prompt("Please enter your name:");

// Check the guest list
checkGuestList(name);