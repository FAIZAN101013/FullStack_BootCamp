/** 
 1) Simple While Loop
Task: Write a while loop that prints numbers from 1 to 10.

Example Output:
1
2
3
4
5
6
7
8
9
10

*/
let i = 1;
while (i <= 10) { 
    console.log(i);
    i++;
}

/*
2) Little Hard While Loop
Task: Write a while loop that prints only even numbers between 1 and 20.

Example Output:
2
4
6
8
10
12
14
16
18
20
*/
let a = 2;
while (a <= 20) { 
    console.log(a);
    a += 2;
}



/*
3) While Loop with If-Else
Task: Write a while loop that prints numbers from 1 to 15, but:
- If the number is divisible by 3, print 'Fizz'.
- If the number is divisible by 5, print 'Buzz'.
- If the number is divisible by both 3 and 5, print 'FizzBuzz'.
- Otherwise, print the number itself.

Example Output:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
*/

j = 1;
while (j <= 15) { 
    if (j % 3 === 0 && j % 5 === 0) {
        console.log('FizzBuzz');
    }
    else if (j % 3 === 0) {
        console.log('Fizz');
    }
    else if (j % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(j);
    }
    j++;
}





/*
4) While Loop with For Loop
Task: Use a while loop to print numbers 1 to 5, and for each number, use a for loop to print that many
asterisks (*).

Example Output:
1: *
2: **
3: ***
4: ****
5: *****
*/
k = 1;

while (k <= 5) {
    let asterisks = '';
    for (let b = 1; b <= k ; b++) {
        asterisks += '*';
    }
    console.log(`${k}: ${asterisks}`);
    
    k++; // Increment i to prevent the infinite loop
}