// List of products in the vending machine
const products = [
  { id: 1, name: "Soda", price: 20 },
  { id: 2, name: "Chips", price: 15 },
  { id: 3, name: "Candy", price: 10 },
  { id: 4, name: "Juice", price: 25 },
  { id: 5, name: "Chocolate", price: 30 }
];

// Your wallet amount
let walletAmount = 40; // Adjust this amount as needed

// Display welcome message and product list
console.log("Welcome to the Virtual Vending Machine!");
console.log(`Your Wallet Amount: Rs.${walletAmount}\n`);
console.log("Here are the available products:");
for (let i = 0; i < products.length; i++) {
  console.log(`${i + 1}. ${products[i].name} - Rs.${products[i].price}`);
}
console.log(""); // Empty line for better formatting

// Function to purchase an item
function purchaseItem() {
  while (walletAmount > 0) {
    // Prompt the user to enter the product name
    const productName = prompt("Enter the product name you want to purchase (or type 'exit' to quit):");

    // If user types 'exit', break out of the loop
    if (productName.toLowerCase() === "exit") {
      console.log("Thank you for using the Virtual Vending Machine!");
      break;
    }

    // Search for the product in the array
    let product = null;
    for (let i = 0; i < products.length; i++) {
      if (products[i].name.toLowerCase() === productName.toLowerCase()) {
        product = products[i];
        break;
      }
    }

    // Check if product exists
    if (product === null) {
      console.log(`Product "${productName}" not found. Please try again.`);
      continue;
    }

    // Check if there is enough money in the wallet
    if (walletAmount >= product.price) {
      walletAmount -= product.price; // Deduct the price from the wallet
      console.log(`You bought a ${product.name} for Rs.${product.price}`);
      console.log(`Your Wallet amount now: Rs.${walletAmount}\n`);
    } else {
      console.log(`Not enough money to buy ${product.name} for Rs.${product.price}`);
      console.log(`Your Wallet amount now: Rs.${walletAmount}\n`);
    }
  }

  // If wallet is empty, exit the loop and display a message
  if (walletAmount === 0) {
    console.log("You have no money left in your wallet. Thank you for using the Virtual Vending Machine!");
  }
}

// Call the function to start the purchasing process
purchaseItem();
