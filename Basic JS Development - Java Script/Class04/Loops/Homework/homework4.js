/*
HOMEWORK #4
Title: Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]
*/

let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];

function full(first, last) {
    for (i = 0; i < first.lenght; i++) {
        console.log(first[i]);
    }
    for (i = 0; i < last.lenght; i++) {
        console.log(last[i]);
    }
}

full(first, last);
