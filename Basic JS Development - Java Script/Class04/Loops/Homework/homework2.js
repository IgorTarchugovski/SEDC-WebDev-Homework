/*
HOMEWORK #2
Title: Looping structures

Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.
*/

for (i=1; i<21; i++) {
    if (i % 2 == 0) {
    console.log('\n', i);
    } else {
        console.log(' ', i);
    }
}