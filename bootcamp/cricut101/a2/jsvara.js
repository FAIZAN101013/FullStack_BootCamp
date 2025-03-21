/**JavaScript Fun Assignment: Variables & Data Types

1. The Chai Pe Charcha
You and your friends are having chai at a tapri (chai stall). Declare the following variables and
assign values:
- chaiPrice (number/float) - The price of one cup of chai.
- biscuitName (string) - Your favorite biscuit with chai.
- isChaiTasty (boolean) - True if you love chai, false otherwise.
- chaiCount (number) - How many cups of chai you drank?
Now print this sentence using console.log():
"I drank [chaiCount] cups of chai for Rs.[chaiPrice] each, with [biscuitName]. Was it tasty?
[isChaiTasty]"

*/

let chaiPrice = parseFloat(prompt("Enter the price of one cup of chai: "));
let biscuitName = prompt("Enter your favorite biscuit with chai: ");
let isChaiTasty = prompt("Do you love chai?").toLowerCase();
if(isChaiTasty === "yes"){
    isChaiTasty = true;
    
} else {
    isChaiTasty = false; 
    console.log("You don't like chai. That's sad.");
}

let chaiCount = parseInt(prompt("How many cups of chai you drank? "));

console.log(`I drank ${chaiCount} cups of chai for Rs.${chaiPrice * chaiCount}, with ${biscuitName}. Was it tasty? ${isChaiTasty ? "Yes" : "No"}`);






/*
2. The Mysterious Tiffin Box
Your friend forgot their tiffin at home. Declare the following variables:
- tiffinContent (null) - Because it's empty!
- chapatiCount (number) - The number of chapatis in your tiffin.
Now print:
"Oh no! My friend's tiffin has [tiffinContent]. Good thing I have [chapatiCount] chapatis to share!"
*/

let tiffinContent = null;
let chapatiCount = parseInt(prompt("Enter the number of chapatis in your tiffin: "));
console.log(`Oh no! My friend's tiffin has ${tiffinContent}. Good thing I have ${chapatiCount} chapatis to share!`);




/*
3. The Friends' Party Chaos
You and your friends planned a party, but things keep changing! Use var, let, and const to handle
the chaos.
Step 1: Declare the following variables:
- const partyBudget - Your total party budget.
- let venue - Where the party is happening (e.g., 'Rohit's Terrace').
- var foodMenu - What you're planning to eat (e.g., 'Pizza and Coke').
Step 2: Oops! Plans changed!
- The venue is too small! Update venue to a new place (e.g., 'Riya's House').
- Someone is allergic to pizza! Update foodMenu to something else (e.g., 'Biryani and Lassi').
Step 3: Print the final party details:
"We planned a party with a budget of Rs.[partyBudget]. At first, it was at [venue] with [foodMenu],
but plans changed! Now, the party is at [venue] with [foodMenu]!"
*/
const partyBudget = parseFloat(prompt("Enter your total party budget: "));
let venue = prompt("Where the party is happening? ");
var foodMenu = prompt("What you're planning to eat? ");
let NewVenue = prompt("Enter the new place for the party: ");
let NewFoodMenu = prompt("Enter the new food menu: ");
console.log(`We planned a party with a budget of Rs.${partyBudget}. At first, it was at ${venue} with ${foodMenu}, but plans changed! Now, the party is at ${NewVenue} with ${NewFoodMenu}!`);






/*
4. The Great Birthday Gift Confusion
Your best friend's birthday is coming up, and you are planning a surprise! But, as always, things
don't go as planned.

Step 1: Declare the following variables:
- const friendName - Your best friend's name (e.g., 'Aarav').
- let gift - What you plan to gift (e.g., 'Smartwatch').
Step 2: Oh no! The gift is out of stock!
- Change gift to a new item (e.g., 'Wireless Earbuds').
Step 3: Print the final gift decision:
"I am buying a birthday gift for my best friend [friendName]. Initially, I planned to get a [gift], but it's
out of stock! So, I am getting a [gift] instead."
 */


const friendName = prompt("Enter your best friend's name: ");
let gift = prompt("What you plan to gift? ");
let NewGift = prompt("Enter the new item: ");
console.log(`I am buying a birthday gift for my best friend ${friendName}. Initially, I planned to get a ${gift}, but it's out of stock! So, I am getting a ${NewGift} instead.`);