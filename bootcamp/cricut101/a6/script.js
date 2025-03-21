/**Assignment 1: The Array Basics Bootcamp

1. Declare an Array
Task: Declare an array called `heroes` with at least 5 superhero names.
Example:
const heroes = ["Iron Man", "Thor", "Hulk", "Black Widow", "Spider-Man"];
*/
const heroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"];



/*

2. Find Array Length
Task: Print the length of the `heroes` array using the `.length` property.
Example:
console.log("Number of heroes:", heroes.length);
*/
let length_arr = heroes.length;

console.log("Number of heros : ", length_arr);



/*
3. Push, Pop, Shift, Unshift
Task:
- Add "Doctor Strange" at the end using `.push()`.
- Remove the last hero using `.pop()`.
- Add "Captain America" at the beginning using `.unshift()`.
- Remove the first hero using `.shift()`.
*/

heroes.push("Doctor Strange");
console.log(heroes);
heroes.pop();
console.log(heroes);
heroes.unshift("Captain America");
console.log(heroes);
heroes.shift();
console.log(heroes);



/*
Example:
heroes.push("Doctor Strange");
heroes.pop();
heroes.unshift("Captain America");
heroes.shift();
*/

/*
4. Change a Particular Element
Task: Change the second element of the `heroes` array to "Black Panther".
Example:
heroes[1] = "Black Panther";
*/


heroes[1] = "antman"
console.log(heroes);




/*
5. Iterate an Array
Task: Loop through the `heroes` array and print each hero's name.
Example:
for (let i = 0; i < heroes.length; i++) {



console.log(heroes[i]); */

for (let i = 0; i < length_arr; i++){
    console.log(heroes[i]);
}