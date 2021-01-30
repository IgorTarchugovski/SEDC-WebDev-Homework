// Exercise 1
// 1. Create a javascript function that will find all numbers divisable by 7 and 3 in a array from 1 to 100.

let divisable = function() {
  let counter = 0;
  for (let i = 1; i <=100; i++) {
    if (i % 3 == 0 && i % 7 == 0) {
    counter++;
    }
  }
  alert("Numbers divisable by 7 and 3 in a array from 1 to 100: ", counter);
}

divisable();
