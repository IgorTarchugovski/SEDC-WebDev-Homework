let year = prompt("Chinese Zodiac\nEnter your year of birth:");

let x1 = year - 4;
let x2 = Math.trunc(x1 / 12);
let x3 = x2 * 12;
let chYear = x1 - x3;
console.log(chYear);

let animal = "";

if (chYear == 0) {
  console.log("Rat");
  animal = "Rat";
} else if (chYear == 1) {
  console.log("Ox");
  animal = "Ox";
} else if (chYear == 2) {
  console.log("Tiger");
  animal = "Tiger";
} else if (chYear == 3) {
  console.log("Rabbit");
  animal = "Rabbit";
} else if (chYear == 4) {
  console.log("Dragon");
  animal = "Dragon";
} else if (chYear == 5) {
  console.log("Snake");
  animal = "Snake";
} else if (chYear == 6) {
  console.log("Horse");
  animal = "Horse";
} else if (chYear == 7) {
  console.log("Goat");
  animal = "Goat";
} else if (chYear == 8) {
  console.log("Monkey");
  animal = "Monkey";
} else if (chYear == 9) {
  console.log("Rooster");
  animal = "Rooster";
} else if (chYear == 10) {
  console.log("Dog");
  animal = "Dog";
} else if (chYear == 11) {
  console.log("Pig");
  animal = "Pig";
} 
else {
  console.log("No year entered.");
}

if (typeof animal === 'string' && animal != "") {
  alert(`You are born in the year of the ${animal}.`);
} else {
  alert("Please enter a year!");
}
