// HOMEWORK PART 2

/* 
Write a JavaScript function that will return:

Calculates your dog's age based on the
conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting
dog to human years as well
*/

let years = prompt("Input human years to calculate dog's age and vice versa:");

function dogsAge(x) {
    let hToD = x*7;
    let dToH = x/7;
    return console.log(`Human to Dog years: ${hToD},\nDog's to Human years: ${dToH}.`);
}

dogsAge(years);
