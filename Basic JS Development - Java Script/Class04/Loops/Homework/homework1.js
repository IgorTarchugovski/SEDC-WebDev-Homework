/*
HOMEWORK #1
Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC!"
*/

function bigString() {
    let arr = ["Hello", "there", "students", "of", "SEDC", "!"];
    console.log(arr.join(' '));
}

bigString();