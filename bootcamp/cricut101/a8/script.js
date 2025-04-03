/**Assignment 1: Become a Legendary Pirate with JavaScript Objects

1. Make a Pirate:
- Create an object representing a pirate with name, age, and ship properties.
- Print the pirate's name and ship.

Example:
```javascript
const pirate = { name: "Jack Sparrow", age: 35, ship: "Black Pearl" };
console.log(pirate.name); // Output: Jack Sparrow
console.log(pirate.ship); // Output: Black Pearl
```
*/
const pirate = {
    name: "Faizan",
    age: 20,
    ship: "ABABABAA"
    };


console.log(pirate.name);
console.log(pirate.ship);

/*
2. Teach Your Pirate to Speak (Methods):
- Add a method `introduce` that returns "Hello, I am [name]!".
- Call and print the method's output.

Example:
```javascript
pirate.introduce = function() {
return `Hello, I am ${this.name}!`;
};
console.log(pirate.introduce()); // Output: Hello, I am Jack Sparrow!
```
*/

pirate.introduce = function () { 
    return `Hello, I am ${this.name}!`;
}
console.log(pirate.introduce()); // Output: Hello, I am Faizan!




/*
3. Upgrade Your Pirates Ship:
- Change the pirate's ship name.
- Print the updated object.

Example:
```javascript
pirate.ship = "Flying Dutchman";
console.log(pirate.ship); // Output: Flying Dutchman */

pirate.ship = "dfawudfbialsudfbywalie";
console.log(pirate.ship); // Output: dfawudfbialsudfbywalie





/**Assignment 2: Command Your Own Fleet Master `this`, Object Creation & Scopes

1. Give Your Pirate a Voice (`this` Keyword):
- Modify `crewMember` to include a method `sayRole` that returns "I am the [role]!".
- Call and print `sayRole()`.

Example:
```javascript
const crewMember = { name: "Gibbs", role: "First Mate",
sayRole: function() { return `I am the ${this.role}!`; }
};
console.log(crewMember.sayRole()); // Output: I am the First Mate!
```
*/

const crewMember = {
    name: "Anas",
    role: "First Mate",
    sayRole: function () { 
        return `I am ${this.name} and my role is  ${this.role}!`;
    }
}


console.log(crewMember.sayRole()); 









/*
2. Build a Shipyard (`createShip` Function):
- Create a function that returns a ship object with a method to describe it.
- Print the ship description.

Example:
```javascript
function createShip(name, captain) {
return { name, captain, describe: function() { return `${this.name} is captained by
${this.captain}.`; } };
}
const ship = createShip("Queen Anne's Revenge", "Blackbeard");
console.log(ship.describe()); // Output: Queen Anne's Revenge is captained by Blackbeard.
```
*/

const createShip = (name, captain) => { 

    return {
        name,
        captain,
        describe: function () { 
            return `${this.name} is captained by ${this.captain}.`;
        }
    }
}

const ship = createShip("Faicasekcyweu RevengefwfWEe", "BlackbeQWDqwdQFQWFard");
console.log(ship.describe()); // Output: Queen Anne's Revenge is captained by Blackbeard.




/*
3. Navigate the JavaScript Seas (Scopes):
- Use a global variable `sea` inside a function.
- Define a local variable inside a function and try accessing it outside.

Example:
```javascript
let sea = "Caribbean"; // Global scope

function sail() {
let destination = "Tortuga"; // Local scope
console.log(`Sailing in the ${sea} towards ${destination}.`);
}

sail(); // Output: Sailing in the Caribbean towards Tortuga.
console.log(destination); // Error: destination is not defined */



let sea = "Aribian"; // Global scope


function sail() { 
    let destination = "lualalampur";
    console.log(`Sailing in the ${sea} towards ${destination}.`);
    // Local scope
}

sail(); // Output: Sailing in the Caribbean towards Tortuga.
console.log(destination); // Error: destination is not defined



