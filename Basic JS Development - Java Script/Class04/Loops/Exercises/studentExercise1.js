/*
STUDENT EXERCISE - #1
FIND NUMBERS IN ARRAY
How many times is a number contained in an array

Write a function named findNumber that:
Takes 2 arguments: number, array
Calculates how many times the number is contained in an array with numbers
Outputs the result to the screen like so: "There is 4 occurrences of number 5 in the array"
Call the function three times with different arrays.
Time to accomplish: 15 minutes.
EXERCISE 1 SOLUTION
function numberCount(number, array) {
        let occurences = 0;
        for(let i = 0; i < array.length; i++){
            if(array[i] === number){
                occurences++;
            }
        }
        return occurences;
    }
    let input = parseInt(prompt("Enter a number:"));
    let testArray = [2, 5, 6, 3, 5, 5, 2, 5, 7, 8, 2];
    console.log(`There are ${numberCount(input, testArray)} occurences of ${input} in the array!`);

*/