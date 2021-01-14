alert("Hello G3, My name is Igor");
console.log("This is a log");
console.info("This is for info");
console.warn("This is a warning");
console.error("This is an error");
console.debug("This is for debuging");

// Feet to meter
let lenght = prompt("Enter lenght in feet");
let convert = lenght * 0.3048;
alert("Converted to meters is " + convert);

//Phones + tax
let phone = 119.95;
let tax = 0.05;
let numberOfPhones = prompt("Enter number of phones");
let resault = (phone + phone * tax) * numberOfPhones;
alert("The price of " + numberOfPhones + " phones is " + resault + " $");
