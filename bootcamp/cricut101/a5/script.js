/**1) Function with Default Values
Task: Write a function 'greet' that takes a name as a parameter and prints 'Hello, [name]!'. If no name is
provided, it should default to 'Guest'.

Example Usage:
greet();
greet("Alice");

Expected Output:
Hello, Guest!
Hello, Alice!
*/
function greet(name) {
    if (num === '') {
        return "Hello, " + "Guest" + "!";
    }
    else{
        return "Hello, " + name + "!";
    }
    
}

let Name = prompt('Enter your name');

greet(Name)







/*
2) Arrow Function
Task: Convert the following function into an arrow function:

function multiply(a, b) {
return a * b;
}

Example Usage:
console.log(multiply(4, 5));

Expected Output:
20
*/
const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(1));



/*
3) Using Alert & Prompt
Task: Create a script that asks the user for their name using 'prompt()' and then displays an alert greeting
them.

Example Usage:
// User enters "John"

Expected Behavior:
An alert appears: 'Hello, John!'
*/
let Name_e = prompt('Enter your name : ')
alert('Hello ' + Name_e)





/*
4) Function with `===` Strict Comparison

Task: Write a function 'isEqual' that takes two parameters and checks if they are strictly equal (`===`). Return
'true' or 'false'.

Example Usage:
console.log(isEqual(5, "5"));
console.log(isEqual(10, 10));

Expected Output:
false
true
*/
function isEqual(a, b) {
    if (a === b) {
        return 'True'
    } else {
        return 'Flase'
    }
}

console.log(isEqual(3,6))



/*
5) Function Declaration with `const`
Task: Declare a function using 'const' that adds two numbers and returns the sum.

Example Usage:
console.log(add(3, 7));

Expected Output:
10 */


const sumOfNumber = ( num1 , num2) => {
    return num1 + num2
}

console.log(sumOfNumber(5,7));
