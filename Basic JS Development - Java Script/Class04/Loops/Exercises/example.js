// Action: Write a JavaScript program to read ten array values, determine the largest value, and print it

// let input = prompt("Enter an array of number's. Example: 23548651148654");
// let myArr = input.split(',');
let myArr = [1, 21, 48.222, 5, 84, 10, 7.5, 8, 999, 10];
console.log(myArr);

function largestValue(arr) {
    let val = null;
    for (i=0; i<arr.length; i++) {
        if (arr[i] > val) {
          val = arr[i]
          
        }
        continue;
    }
    return val;
}

console.log("Largest value of the array is: " ,largestValue(myArr));