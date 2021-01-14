// STUDENT EXERCISE - #3

let birthYear = prompt("Input your Birth Year:")

let date = new Date();
let currentYear = date.getFullYear();

function calculateAge(x, y) {
    return console.log("You are " + (x-y) + " years old.");
}

calculateAge(currentYear, birthYear);