/*
Decription: The Math object allows you to perform mathematical tasks.
Math.pow(x,y); - Returns the value of x to the power of y
Action: Write a JavaScript program to write the sum of squares of the numbers from 101 to 150
*/

let sumOfSquares = null;

for (let i=101; i<=150; i++) {
    sumOfSquares += Math.pow(i, 2);
    
}

console.log(`The sum of squares of the numbers from 101 to 150 is: ${sumOfSquares}`);