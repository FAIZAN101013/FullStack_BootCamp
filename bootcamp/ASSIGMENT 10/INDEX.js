const person = {
  name: "John",
  age: 25,
  city: "New York"
};

console.log(person.name); // Output: John


const colors = ["red", "blue", "green", "yellow", "purple"];
console.log(colors[0]); // Output: red


const student = {
  name: "Emma",
  age: 20
};

student.hobby = "reading"; // Adding the 'hobby' property
console.log(student); 
// Output: { name: "Emma", age: 20, hobby: "reading" }



const numbers = [10, 20, 30, 40];

numbers.forEach(number => {
  console.log(number * 2);
});
// Output:
// 20
// 40
// 60
// 80



const obj = { name: "Alice", age: 30 };

if ("age" in obj) {
  console.log("Key 'age' exists in the object.");
} else {
  console.log("Key 'age' does not exist in the object.");
}
// Output: Key 'age' exists in the object.


const arr = [5, 15, 25, 35];
let sum = 0;

for (const num of arr) {
  sum += num;
}

console.log(sum); // Output: 80




const array = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const obj = array.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

console.log(obj);
// Output:
// {
//   1: { id: 1, name: "Alice" },
//   2: { id: 2, name: "Bob" },
//   3: { id: 3, name: "Charlie" }
// }


const numbers = [3, 8, 12, 5, 7];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [8, 12]
