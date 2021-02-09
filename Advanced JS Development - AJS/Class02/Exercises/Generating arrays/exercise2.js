// Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000

let arrEvenDivBy4 = [];
for (let i = 1; i <= 1000; i++) {
  if (i % 2 === 0 && i % 4 === 0) {
    arrEvenDivBy4.push(i);
  }
}

console.log(arrEvenDivBy4);