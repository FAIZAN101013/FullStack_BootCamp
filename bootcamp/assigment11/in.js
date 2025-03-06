/*1. Types of Scopes
Global Scope

A variable or function declared in the global scope can be accessed from anywhere in the code.
Example:
javascript
Copy
Edit
let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar);  // Can access globalVar
}

showGlobal(); // Output: I am global
console.log(globalVar);  // Output: I am global
Function Scope

Variables declared inside a function are accessible only within that function. They are not visible outside of it.
Example:
javascript
Copy
Edit
function localScope() {
  let localVar = "I am inside the function";
  console.log(localVar);  // Can access localVar
}

localScope();
console.log(localVar);  // Error: localVar is not defined outside the function
Block Scope

Variables declared using let or const inside a block (e.g., inside a loop or conditional) are only accessible within that block.
Example:
javascript
Copy
Edit
if (true) {
  let blockVar = "I am inside the block";
  console.log(blockVar);  // Can access blockVar
}

console.log(blockVar);  // Error: blockVar is not defined outside the block
2. Output of the Code
Code:

javascript
Copy
Edit
let a = 10;

function scopeTest() {
  let a = 20;
  console.log(a);
}

scopeTest();
console.log(a);
Explanation:

When scopeTest() is called, it logs the value of a inside the function. Since a is redeclared within the function with a value of 20, it prints 20.
After the function call, the a in the global scope (which is 10) is logged.
Output:

Copy
Edit
20
10
3. Rewrite with let or const
Original Code:

javascript
Copy
Edit
function checkVar() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Outside loop:", i);
}

checkVar();
Rewritten Code (using let):

javascript
Copy
Edit
function checkVar() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Outside loop:", i);  // Error: i is not defined here
}

checkVar();
Explanation:

var has function scope, meaning it is accessible outside the loop. In contrast, let has block scope, so it is not accessible outside the for loop.
const could also be used if i doesn't need to be reassigned.
4. Predict the Output
Code:

javascript
Copy
Edit
let x = 50;

function outer() {
  let x = 40;

  function inner() {
    let x = 30;
    console.log(x);
  }

  inner();
  console.log(x);
}

outer();
console.log(x);
Explanation:

The inner() function logs the value of x inside its scope (which is 30).
After inner() is called, outer() logs its own x (which is 40).
Finally, the global x (which is 50) is logged.
Output:

Copy
Edit
30
40
50
5. What is a Closure in JavaScript?
A closure is a function that retains access to its lexical scope, even after the function that created it has finished executing. This means the inner function has access to variables from its outer (enclosing) function, even after the outer function has completed.

Example:

javascript
Copy
Edit
function outer() {
  let outerVar = "I am from outer";

  return function inner() {
    console.log(outerVar);  // inner() has access to outerVar from outer()
  };
}

let closureExample = outer();
closureExample();  // Output: I am from outer
Explanation:

The inner() function forms a closure because it has access to outerVar from its enclosing outer() function's scope, even after outer() finishes executing.
*/