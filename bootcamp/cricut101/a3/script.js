/*Twist of Fate: If, Else, and Everything in Between!

1. The Exam Result Tension (if statement)
Your friend just checked their exam result online. The passing mark is 35.
- Create a variable marks and assign any number.
- Use an if statement to check if the marks are above or equal to 35.
- If true, print: "Yay! You passed the exam!"
*/
let marks = 65;
if(marks >= 35){
    console.log("Yay! You passed the exam!");
} else {
    console.log("Sorry! You failed the exam.");
}
/*
2. The Auto Rickshaw Fare (if-else statement)
You take an auto rickshaw to college, but the fare depends on distance:
- If the distance is 5 km or less, the fare is Rs.30.
- Otherwise, the fare is Rs.50.
- Write a program using if-else that takes the distance as input and prints the correct fare.
Example output: "Your distance is 3 km. You need to pay Rs.30."
*/

let distance = parseInt(prompt("Enter the distance in km: "));
if(distance <= 5){
    console.log(`Your distance is ${distance} km. You need to pay Rs.30.`);
} else {
    console.log(`Your distance is ${distance} km. You need to pay Rs.50.`);
}

/*
3. The Cricket Fever (if-else-if statement)
India is playing a cricket match, and you want to check the match status.
- If runs >= 200, print "India is dominating!"
- Else if runs >= 100, print "India is playing well!"
- Else if runs >= 50, print "India is building the innings."
- Else, print "India needs to score more!"
Test with different run values and check the output.
*/
let runs = parseInt(prompt("Enter the runs scored by India: "));
if(runs >= 200){
    console.log("India is dominating!");
} else if(runs >= 100){
    console.log("India is playing well!");
} else if(runs >= 50){
    console.log("India is building the innings.");
} else {
    console.log("India needs to score more!");
};

/*
4. The Scholarship Eligibility (nested if-else statement)
Your college is offering a scholarship based on marks and attendance.
- If marks >= 90, then check:
- If attendance >= 75%, print "Congratulations! You got the scholarship!"
- Else, print "Marks are good, but attendance is low. No scholarship!"
- Else, print "You need higher marks to get the scholarship."
Try different marks and attendance values to see how the conditions work!
*/
let scholarshipMarks = parseInt(prompt("Enter your marks: "));
let scholarshipAttendance = parseInt(prompt("Enter your attendance percentage: "));
if (scholarshipMarks >= 90) {
    if (scholarshipAttendance >= 75) {
        console.log("Congratulations! You got the scholarship!");
    }
    else {
        console.log("Marks are good, but attendance is low. No scholarship!");
    }
}
else {
    console.log("You need higher marks to get the scholarship.");
}


/*
5. The Food Menu (switch-case statement)
You are at a canteen, and you want to order food.
- Write a program using switch-case where:
- If you enter 1, it prints "You ordered a Masala Dosa."
- If you enter 2, it prints "You ordered a Paneer Butter Masala."

- If you enter 3, it prints "You ordered a Veg Biryani."
- If you enter any other number, it prints "Invalid choice! Please select from the menu."
Test with different inputs to see the menu system work!
*/

let foodChoice = parseInt(prompt("Enter your food choice: "));
switch(foodChoice){
    case 1:
        console.log("You ordered a Masala Dosa.");
        break;
    case 2:
        console.log("You ordered a Paneer Butter Masala.");
        break;
    case 3:
        console.log("You ordered a Veg Biryani.");
        break;
    default:
        console.log("Invalid choice! Please select from the menu.");
        break;
}