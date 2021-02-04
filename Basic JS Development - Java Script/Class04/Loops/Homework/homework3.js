/*
 HOMEWORK #3
Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it
 */

let arr = [50, 9, 2, 3, 5, 6, 8, 11];
let max = 0;
let min = arr[0];


for (i=0; i<arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    } else if (arr[i]<min) {
        min = arr[i];
    }
}

console.log(`Max: ${max}, Min: ${min}, Sum: ${min+max}`);