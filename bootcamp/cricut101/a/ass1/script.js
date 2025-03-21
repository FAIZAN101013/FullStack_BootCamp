/**
 * 1. The Endless Chase (Basic FOR Loop)
Dr. Abhimanyu is running through the dark streets, being chased by an unknown force. He has 10 seconds to
find a hiding spot.

Task:
- Use a FOR loop to print "Abhimanyu is running... X seconds left!" for 10 seconds (X counting down from 10
to 1).
- When X reaches 1, print "Abhimanyu has escaped... for now!"*/

 for(let i = 10; i >= 1; i--){
     console.log(`Abhimanyu is running... ${i} seconds left!`);
 }
 console.log("Abhimanyu has escaped... for now!");




console.log('')
/*
2. The Secret Code (FOR Loop with Variable)
Abhimanyu finds a hidden locker that requires a 6-digit passcode. The code increases by 5 every second,
starting from 100.

Task:
- Use a FOR loop with a variable passcode that starts at 100 and increases by 5 each time.
- Print the passcode for 6 iterations to unlock the locker.

Example Output:
Unlocking... Passcode: 100
Unlocking... Passcode: 105
Unlocking... Passcode: 110
...
Unlocked!*/

let passcode = 100;
for(let i = 1; i <= 5; i++){
    console.log(`Unlocking... Passcode: ${passcode}`);
    passcode += 5;
}
console.log("Unlocked!");



console.log('')
/*
3. The Shadow's Warning (FOR Loop with IF-ELSE)
A mysterious voice whispers: "You can only escape if your number is EVEN!"

Task:
- Use a FOR loop to print numbers from 1 to 10.
- If a number is even, print "SAFE: X (Even number!)".
- If a number is odd, print "DANGER: X (Odd number!)".

Example Output:
DANGER: 1 (Odd number!)
SAFE: 2 (Even number!)

DANGER: 3 (Odd number!)
SAFE: 4 (Even number!)
...*/

for (let i = 1; i <= 10; i++) { 
    if (i % 2 === 0) {
        console.log(`SAFE: ${i} (Even number!)`);
    }
    else {
        console.log(`DANGER: ${i} (Odd number!)`);
    }
}



console.log('')
/*
4. The Black Hole Trap (FOR Loop inside FOR Loop)
Abhimanyu is caught in a Black Hole Chakravyuh! There are 3 layers inside the black hole, and each layer
has 4 time loops that he must cross to escape.

Task:
- Use a nested FOR loop to represent 3 layers, each with 4 time loops.
- Print "Layer X - Escaping Time Loop Y" for each loop.
- When all loops are cleared, print "Abhimanyu has escaped the Black Hole!"

Example Output:
Layer 1 - Escaping Time Loop 1
Layer 1 - Escaping Time Loop 2
Layer 1 - Escaping Time Loop 3
Layer 1 - Escaping Time Loop 4
...
Layer 3 - Escaping Time Loop 4
Abhimanyu has escaped the Black Hole!
 */
// outer loop for layers
for (let i = 1; i <= 3; i++) { 
    // inner loop for time loops
    for (let j = 1; j <= 4; j++) {
        console.log(`Layer ${i} - Escaping Time Loop ${j}`);
    }
}
console.log("Abhimanyu has escaped the Black Hole!");
console.log('')

