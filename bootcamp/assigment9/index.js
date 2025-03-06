/*Write a for loop to print numbers from 1 to 10 in the console*/
for (let i = 1; i <= 10; i++){
    console.log(i);
}
console.log(" " );
// Explanation: the for loop will start from 1 and will run until 10 and will print the value of i in the console.

/**.Write a while loop to calculate the sum of numbers from 1 to 50, and print the result */
let i = 1;
let sum = 0;
while (i <= 50) {
    sum += i;
    i++;
}
console.log("Answer: " );
console.log(sum);
console.log(" " );
// Explanation: The while loop will start from 1 and will run until 50 and will add the value of i to sum and will print the sum in the console.
// <= this is the less than or equal to operator.and += is the addition assignment operator.

//.Write a for loop to print the multiplication table of 7, from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${i * 7}`);
}
console.log(" " );
// Explanation: The for loop will start from 1 and will run until 10 and will print the value of i multiplied by 7 in the console.

//Write a while loop to print numbers from 20 to 1 in reverse order
let i2 = 20;
while (i2 >= 1) {
    console.log(i2);
    i2--;
}

// Explanation: The while loop will start from 20 and will run until 1 and will print the value of i in the console in reverse order.
console.log(" ");

//Write a for loop to calculate the factorial of a given number n
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(`The factorial of ${n} is ${factorial}`);
console.log(" ");

// Explanation: The for loop will start from 1 and will run until n and will multiply the value of i to factorial and will print the factorial in the console.