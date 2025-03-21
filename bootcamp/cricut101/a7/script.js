/**1. Sorting and Iteration Methods
Task:
- Sort the array in alphabetical order.
- Use `.forEach()` to print each hero.
- Use `.map()` to add "!" to each hero's name.
- Use `.find()` to get a hero name containing "Black".
- Use `.findIndex()` to find the position of "Spider-Man".

Example:
heroes.sort();
heroes.forEach(hero => console.log(hero));
const modifiedHeroes = heroes.map(hero => hero + "!");
console.log(modifiedHeroes);
console.log(heroes.find(hero => hero.includes("Black")));
console.log(heroes.findIndex(hero => hero === "Spider-Man"));
*/
const heroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"];

heroes.sort();
console.log("after sorting", heroes);

heroes.forEach(i => console.log(i));

const modifiedHeroes = heroes.map(hero => hero + "!");
console.log(modifiedHeroes);

console.log(heroes.find(hero => hero.includes("Black")));
console.log(heroes.findIndex(hero => hero === "Spider-Man"));

/*
2. Check Conditions Using `.some()` and `.every()`
Task:
- Check if any hero name is "Hulk" using `.some()`.
- Check if all heroes have more than 3 characters using `.every()`.

Example:
console.log(heroes.some(hero => hero === "Hulk"));
console.log(heroes.every(hero => hero.length > 3));
*/
console.log(heroes.some(hero => hero === "Hulk"));
console.log(heroes.every(hero => hero.length > 3));

/*
3. Using `.includes()` in a Function
Task: Write a function `isHeroInList` that takes a name and returns `true` if the hero is in the `heroes` array.

Example:
function isHeroInList(name) {
return heroes.includes(name);
}

JavaScript Array Assignments

console.log(isHeroInList("Thor")); // true
console.log(isHeroInList("Loki")); // false
*/
function isHeroInList(name) {
    return heroes.includes(name);
}

console.log(isHeroInList("Thor")); // false
console.log(isHeroInList("Loki")); // false

/*
4. Function & `if-else`
Task: Write a function `findHero` that checks if a hero exists in the array. If it exists, return "Found!", else
return "Not Found!".

Example:
function findHero(name) {
if (heroes.includes(name)) {
return "Found!";
} else {
return "Not Found!";
}
}
console.log(findHero("Iron Man")); // Found!
console.log(findHero("Thanos")); // Not Found! */

function findHero(name) {
    if (heroes.includes(name)) {
        return "Found!";
    } else {
        return "Not Found!";
    }
}

console.log(findHero("Iron Man")); // Not Found!
console.log(findHero("Thanos")); // Not Found!