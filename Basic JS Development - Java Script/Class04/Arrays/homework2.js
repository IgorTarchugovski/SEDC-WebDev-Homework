/*
HOMEWORK #2
Write a function that will take an array of 5 numbers as an argument and return the sum.
Print it in the console or in alert
BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.
*/

let numbers = [4, 2, 6, 10, 798];

function sum(x) {
    let i = 0;
    let sumOfNumbers = 0;
    while (i<numbers.length) {
        sumOfNumbers = sumOfNumbers + numbers[i];
        i++;
    }
    console.log("Sum of numbers is :", sumOfNumbers);
    
    // let numbersSum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
    // console.log("Sum of numbers is: ", numbersSum);
    // console.log(x.shift()+x.shift()+x.shift()+x.shift()+x.shift());
}

sum(numbers);


// Solution for large array - .reduce() method
let largeArray = [1, -6, 2, 3.5, 4, 5, 6, 7.2, 8, 9, 10.3, 45, 720, -15, 200, 0];
let total = largeArray.reduce((initialValue, currentValue) => {
    return initialValue + currentValue;
});

console.log("Sum of largeArray is: ",total);

