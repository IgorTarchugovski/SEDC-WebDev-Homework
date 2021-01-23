/*
Action: Write a JavaScript program that will read in a number and write out its digits
*/

let input = prompt("Enter a number to write out its digits:");
let myArray = input.split('');

for (let i=0; i<myArray.length; i++) {
    console.log(`Digit no.${i+1}: ${myArray[i]}`);
}