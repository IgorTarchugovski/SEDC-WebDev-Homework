// HOMEWORK PART 1

/* 
Write a JavaScript function which accepts a parameter
and returns its type and prints it in the console. 
Try to call the functions 5 times for 5 different types:

object
boolean
number
string
undefined
*/

let blabla;
let person = {
    name: "Igor",
    age: 28
}

function detectDataType(x) {
    return console.log(typeof(x));
}

detectDataType("Some Text");
detectDataType(23);
detectDataType(true);
detectDataType(blabla);
detectDataType(person);