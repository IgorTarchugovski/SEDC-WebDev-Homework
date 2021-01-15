/*
HOMEWORK #1
Create a function called tellStory()
The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
The function should return one big string with a story made from the arguments
Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
The value that is returned from the function should be printed in the console or in alert
*/

let myArray = ['Igor', 'sleepy', 'coding'];
function tellStory(x) {
    return console.log(`This is ${x[0]}. ${x[0]} is a nice person. Today hi is ${x[1]}. He was ${x[2]} all day. The end.`);
}

tellStory(myArray);


// Just for fun
let person = ['Igor', 'Kiki', 'Jane', 'Filip', 'Ana'];
let mood = ['happy', 'sad', 'crazy', 'bored', 'hyper'];
let activity = ['jogging', "cooking", "reading", "drinking", "sleeping"];

function randomStory(a, b, c) {
    console.log(`Hello. My name is ${a[Math.floor(Math.random() * a.length)]}. Today i am feeling ${b[Math.floor(Math.random() * b.length)]}. I was ${c[Math.floor(Math.random() * c.length)]} all day. The end.`);
}

randomStory(person, mood, activity);