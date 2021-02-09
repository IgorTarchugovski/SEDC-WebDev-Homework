// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000

let arr = [];
for (let i = 0; i< 1000; i++) {
  if (i % 3 ===0) {
    arr.push(i);
  }
}

console.log(arr);