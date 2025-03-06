/* Assignment Questions:
Variables & Data Types:
Declare a variable of each data type (number, string, undefined, and boolean) and log their values and types to the console.
*/
let num = 10;
let str = "Hello";
let und = undefined;
let bool = true;
console.log(num, typeof num);
console.log(str, typeof str);
console.log(und, typeof und);
console.log(bool, typeof bool);
/*
If-else Statement:Write a program that takes a number as input. If the number is even, print "Even Number"; otherwise, print "Odd Number".
*/
let num1 = prompt("Enter a number: ");
if (num1 % 2 === 0) {
    console.log("Even Number");
}else {
    console.log("Odd Number");
}
/*
If-else-if Statement:
Create a program that checks the temperature:

If it's above 30°C, print "It's hot outside".
If it's between 20°C and 30°C, print "The weather is moderate".
If it's below 20°C, print "It's cold outside".
*/
let temp = prompt("Enter the temperature: ");
if (temp > 30) {
    console.log("It's hot outside");
}
else if (temp >= 20 && temp <= 30) { 
    console.log("The weather is moderate");
}
else {
    console.log("It's cold outside");
}
/*
Nested If-else Statement:
Write a program that takes a user's age as input and checks:

If the age is above 18, check if the user has a driving license.
If they have a license, print "You can drive".
Otherwise, print "Get a license first".
If the age is below 18, print "You are too young to drive".
*/
let age = prompt("Enter your age: ");
if (age > 18) {
    let hasLicense = prompt("Do you have a driving license? (true/false): ");
    if (hasLicense === "true") {
        console.log("You can drive");
    }
    else {
        console.log("Get a license first");
    }
} else {
    console.log("You are too young to drive");
 }
/*
Switch Statement (Weekdays):
Take a number (1-7) as input and use a switch statement to print the corresponding day of the week (1 for Monday, 2 for Tuesday, etc.).
*/
let day = prompt("Enter a number (1-7): ");
switch (day) { 
    case "1": 
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
}
/*
Switch vs. If-Else:
Explain in comments when you should use a switch statement instead of if-else. (Hint: When you have multiple fixed cases, like menu options, days, or categories.)
 >> A switch statement is like a special tool we use when we have many fixed choices, like picking a day of the week or choosing from a menu. Instead of writing many if-else statements, we can use a switch statement to make our code cleaner and easier to read. For example, if we want to print the name of a day based on a number (1 for Monday, 2 for Tuesday, etc.), a switch statement helps us do that quickly.
*/

/*
Switch Statement (Grade System):
Write a program that takes a grade letter ('A', 'B', 'C', 'D', 'F') as input and prints the corresponding remarks:

'A' → "Excellent"
'B' → "Good"
'C' → "Average"
'D' → "Pass"
'F' → "Fail"
*/
 
let Grade = prompt("Enter a grade letter (A, B, C, D, F): ");

switch (Grade) { 
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Pass");
        break;
    case "F":
        console.log("Fail");
        break;
    
}
/*
Boolean Condition Check:
Declare a boolean variable isLoggedIn. If it's true, print "Welcome back!", otherwise print "Please log in".
*/

let isLoggedIn = true;
if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in");
}
/*
Undefined Variable Handling:
Declare a variable without assigning it a value. Check if it is undefined and print a message accordingly.
*/

let name;

if (name === undefined) {
    console.log("Variable is undefined");
} else {
    console.log("Variable is defined");
}
/*
Basic Calculator (Switch Case):
Take two numbers and an operator (+, -, *, /) as input. Use a switch statement to perform the corresponding operation and display the result.
*/

let num2 = int(prompt("Enter first number: "));
let num3 = int(prompt("Enter second number: "));
 
let operator = prompt("Enter an operator (+, -, *, /): ");
let result;
switch (operator) { 
    case "+":
        result = num2 + num3;
        console.log(result);
        break;
    case "-":
        result = num2 - num3;
        console.log(result);
        break;
    case "*":
        result = num2 * num3;
        console.log(result);
        break;
    case "/":
        result = num2 / num3;
        console.log(result);
        break;
}