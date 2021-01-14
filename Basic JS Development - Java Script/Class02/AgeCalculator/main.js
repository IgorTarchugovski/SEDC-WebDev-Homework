let birthday = prompt("Enter your birth date: (mm/dd/yyyy)");
let stringFormatedDate = birthday.match(/(\d\d)(\d\d)(\d\d\d\d)/);
let todayDate = new Date();
let date = new Date(
  stringFormatedDate[3],
  stringFormatedDate[1] - 1,
  stringFormatedDate[2]
);

let td = todayDate.getDate(); //today's day
let tm = todayDate.getMonth() + 1; //today's month
let ty = todayDate.getFullYear(); //today's year

let bd = date.getDate(); //birthday's day
let bm = date.getMonth() + 1; //birthday's month
let by = date.getFullYear(); //birthday's year

console.log("birthday's day: " + bd);
console.log("birthday's month: " + bm);
console.log("birthday's year: " + by);

console.log("today's day: " + td);
console.log("today's month: " + tm);
console.log("today's year: " + ty);

console.log(todayDate);
console.log(date);

console.log(td - bd);
console.log(tm - bm);
console.log(ty - by);

let age = ty - by;
console.log(`You are/will be ${age} years old, this year!`);

if (
  by > ty ||
  (bd > td && bm > tm && by == ty) ||
  ((bd > td || bm > tm) && by == ty)
) {
  alert("Please enter a valid birth year!!!");
} else if (td == bd && tm == bm && ty == by) {
  console.log("Welcome to this world child.");
} else if (td == bd && tm == bm && ty - by < 18) {
  console.log("Happy Birthday! You are underage. 18-");
} else if (td == bd && tm == bm && ty - by >= 18) {
  console.log("Happy Birthday! You are an adoult. 18+");
} else if (
  (bd < td && bm <= tm && ty - by <= 18) ||
  (bd != td && bm < tm && ty - by <= 18) ||
  (bd != td && bm != tm && ty - by < 18)
) {
  console.log("You are underage. 18-");
} else {
  console.log("You are an adoult. 18+");
}
