/**1) Function Declaration & Calling
Task: Write a function named 'greet' that takes a name as a parameter and prints 'Hello, [name]!'.

Example Usage:
greet("Alice")

Expected Output:
Hello, Alice!
*/

function greet(name) {
    return "Hello, " + name + "!";
}

let Name = prompt('Enter your name');

greet(Name)






/*
2) Function with Return Value
Task: Write a function 'square' that takes a number as input and returns its square.

Example Usage:
result = square(5)
print(result)

Expected Output:
25
*/
function square(num) {
    return num*num
}

// Test the function
console.log(square(5))


/*
3) Function with If-Else
Task: Write a function 'check_number' that takes a number as input and:
- Returns 'Positive' if the number is greater than 0.
- Returns 'Negative' if the number is less than 0.
- Returns 'Zero' if the number is exactly 0.

Example Usage:
print(check_number(10))
print(check_number(-5))
print(check_number(0))

Expected Output:
Positive
Negative
Zero
*/

function check_number(num) { 

    if (num > 0) {
        return 'Positive'
    }
    else if (num < 0) { 
        return 'Negative'
    }
    else {
        return '0'
    }
}

console.log(check_number(0))
console.log(check_number(2))
console.log(check_number(-2))



/*
4) Function with For Loop

Task: Write a function 'print_stars' that takes a number 'n' and prints 'n' lines of stars (*), increasing in each
line.

Example Usage:
print_stars(4)

Expected Output:
*
**
***
**** */

function print_stars(num) {
    for (let i = 0; i <= num; i++){
        let stars = '';
        for (let j = 0; j < n-i; j++){
            stars += ''
        }
        for (let k = 0; k < i; k++) { 
            stars += '*'
        }
        console.log(stars);
    }
}

print_stars(5)