let insertedCNum = Number(prompt("Insert C number: "));
// console.log(insertedCNum*1.8 + 32);

let insertedFNum = Number(prompt("Insert F number: "));
// console.log((5/9)*(insertedFNum - 32));

function CtoF(insertedCNum) {
  let resoult = insertedCNum*1.8 + 32;
  return resoult;
}

function FtoC(insertedFNum) {
  let resoult = (5/9)*(insertedFNum - 32);
  return resoult;
}

console.log(CtoF(insertedCNum));
console.log(FtoC(insertedFNum));