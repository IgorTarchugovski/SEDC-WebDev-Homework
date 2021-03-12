/*
STUDENT EXERCISE - #2
FILTER ODD/EVEN NUMBERS FUNCTION
Write a function named findNumber that:
Takes 2 arguments: array, type
The person that calls the function should provide an array of numbers and string odd / even
If the type is even the function should find all the even numbers and return them as result
If the type is odd the function should find all the odd numbers and return them as result
Time to accomplish: 20 minutes.

*/

let array = prompt("Enter an array of numbrs: ");
let type = prompt("Type of numbers to be found: odd / even");

function filterOddEven(array, type) {
  let result = [];
  if (type === "even") {
    for (let num of array) {
      if (num % 2 === 0) {
        result.push(num);
      }
    }
    return result;
  } else if (type === "odd") {
    for (let num of array) {
      if (num % 2 !== 0) {
        result.push(num);
      }
    }
    return result;
  }
}

console.log(filterOddEven(array, type));
