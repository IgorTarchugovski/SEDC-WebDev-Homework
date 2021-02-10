// Generate an array that has all the numbers that end with the digit 1 from 1 to 1000

let endWith1arr = [];
for (let i = 1; i <= 1000; i++) {
  if (i % 10 === 1) {
    endWith1arr.push(i);
  }
}

console.log(endWith1arr);
