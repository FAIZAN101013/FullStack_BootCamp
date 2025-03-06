//If-Else Questions:Check Even or Odd
//function takes a number as an argument and returns 'Even' for even numbers and 'Odd' for odd numbers.
const EvenOrOdd = (num) => { 
    if(num % 2 === 0){
        return 'Even';
    } else {
        return 'Odd';
    }
}

console.log(EvenOrOdd(4)); //Even
console.log(EvenOrOdd(5)); //Odd
console.log(EvenOrOdd(0)); //Even

/* Grading System
Create a program that accepts student marks (0-100) and prints the grade:
90 and above: "Grade A"
75 to 89: "Grade B"
50 to 74: "Grade C"
Below 50: "Grade F"
*/
const Grade = (marks) => { 
    if(marks >= 90){
        return 'Grade A';
    } else if(marks >= 75 && marks <= 89){
        return 'Grade B';
    } else if(marks >= 50 && marks <= 74){
        return 'Grade C';
    } else {
        return 'Grade F';
    }
}

console.log(Grade(80)); //Grade B
console.log(Grade(45)); //Grade F
console.log(Grade(95)); //Grade A


// the function takes a number as an argument and returns 'Positive' for positive numbers, 'Negative' for negative numbers, and 'Zero' for 0.

/**Voter Eligibility Check
Write a program that asks the user for their age and checks if they are eligible to vote (age ≥ 18). */
const VoterEligibility = (age) => { 
    if(age >= 18){
        return 'Eligible to vote';
    } else {
        return 'Not eligible to vote';
    }
}       

console.log(VoterEligibility(20));
console.log(VoterEligibility(15));
console.log(VoterEligibility(18));

//Eligible to vote
// this function takes a number as an argument and returns 'Positive' for positive numbers, 'Negative' for negative numbers, and 'Zero' for 0.

/*Switch Case Questions:Day of the Week
Write a program that takes a number (1-7) and prints the corresponding day of the week using a switch statement.
*/
const DayOfWeek = (num) => { 
    switch(num){
        case 1:
            return 'Sunday';
        case 2:
            return 'Monday';
        case 3:
            return 'Tuesday';
        case 4:
            return 'Wednesday';
        case 5:
            return 'Thursday';
        case 6:
            return 'Friday';
        case 7:
            return 'Saturday';
        default:
            return 'Invalid input';
    }
}

console.log(DayOfWeek(3)); //Tuesday
console.log(DayOfWeek(8)); //Invalid input
console.log(DayOfWeek(7)); //Saturday


// this function takes a number as an argument and returns 'Positive' for positive numbers, 'Negative' for negative numbers, and 'Zero' for 0.

/*Simple Calculator
Create a program that takes an operator (+, -, *, /) and two numbers, then performs the corresponding arithmetic operation. */
const SimpleCalculator = (operator, num1, num2) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
};

console.log(SimpleCalculator('+', 5, 3)); //8
console.log(SimpleCalculator('-', 5, 3)); //2
console.log(SimpleCalculator('*', 5, 3)); //15
console.log(SimpleCalculator('/', 5, 3)); //1.6666666666666667

// this function takes a number as an argument and returns 'Positive' for positive numbers, 'Negative' for negative numbers, and 'Zero' for 0.

/*Month Name Finder
Write a program that takes a number (1-12) and prints the corresponding month name (e.g., 1 = January, 2 = February, etc.). */
const MonthName = (num) => {
    switch(num){
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
        default:
            return 'Invalid input';
    }
}

console.log(MonthName(8)); //August
console.log(MonthName(13)); //Invalid input
console.log(MonthName(1)); //January


// this function takes a number as an argument and returns 'Positive' for positive numbers, 'Negative' for negative numbers, and 'Zero' for 0.

/*Function Questions:Add Two Numbers
Write a function addNumbers(a, b) that takes two numbers as input and returns their sum */
const addNumbers = (a, b) => {
    return a + b;
};

console.log(addNumbers(5, 3)); //8
console.log(addNumbers(10, 20)); //30
console.log(addNumbers(0, 0)); //0
// this function takes a number as an argument and returns 'Positive' for positive numbers, 'Negative' for negative numbers, and 'Zero' for 0.

/**Find the Maximum
Write a function findMax(num1, num2) that takes two numbers and returns the larger number. */
const findMax = (num1, num2) => {
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }   

};

console.log(findMax(5, 3)); //5
console.log(findMax(10, 20)); //20
console.log(findMax(0, 0)); //0

// this function takes a number as an argument and returns 'Positive' for positive numbers, 'Negative' for negative numbers, and 'Zero' for 0.

/**Greeting Function
Write a function greet(name) that takes a person's name and prints a greeting message. */
const greet = (name) => {
    return `Hello, ${name}!`;
};

console.log(greet('Alice')); //Hello, Alice!
console.log(greet('Bob')); //Hello, Bob!
console.log(greet('Charlie')); //Hello, Charlie!
console.log(greet('Faizan')); //Hello, Faizan!
// this function takes a number as an argument and returns 'Positive' for positive numbers, 'Negative' for negative numbers, and 'Zero' for 0.