/*
STUDENT EXERCISE - #1
FIND NUMBERS IN ARRAY
How many times is a number contained in an array

Write a function named findNumber that:
Takes 2 arguments: number, array
Calculates how many times the number is contained in an array with numbers
Outputs the result to the screen like so: "There is 4 occurrences of number 5 in the array"
Call the function three times with different arrays.
*/


let action = prompt("STUDENT EXERCISE #1 \nEnter an array of numbers:");
let arr = action.split('');
console.log(arr)
let num = parseInt(prompt("STUDENT EXERCISE #1 \nEnter a number:"));
console.log(num);

function findNumber(number, array) {
    let occurences = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] == number){
            occurences++;
        }
    }
    return occurences;
}

console.log(`There are ${findNumber(num, arr)} occurences of ${num} in the array!`);