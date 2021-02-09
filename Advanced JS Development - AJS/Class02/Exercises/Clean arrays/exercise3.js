// Create a function that cleans undefined, null, NaN and "" and leaves all other values

let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

function removeFalsyValues(inputArr) {
  let parseArray = [];
  for (let element of inputArr) {
    if(!element && typeof element !== 'boolean') {
      continue;
    }
    parseArray.push(element);
  }
  return parseArray;
}

console.log(removeFalsyValues(test));