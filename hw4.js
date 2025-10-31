
 // HW4 JavaScript Foundations



  // Section 1: Basic Rules and Data Types


// Exercise 1: Fixed the naming and formatting to follow JS conventions
let thisIsANewVariable = 10;
if (thisIsANewVariable === 10) {
  console.log("Ex1:", "thisIsANewVariable is 10");
}

// Exercise 2: Variables for different data types
let welcomeMessage = `Hello, world!`; // string using backticks
let piApprox = 3.14159;               // number (float)
let isActive = true;                  // boolean (true/false)
console.log("Ex2:", { welcomeMessage, piApprox, isActive });

// Exercise 3: Added a quick comment explaining what the variable does
// Stores the user's current score out of 100
let currentScore = 95;
console.log("Ex3:", currentScore);

// Exercise 4: Checking equality vs strict equality
console.log("Ex4 == :", '100' == 100);   // checks just value (true)
console.log("Ex4 ===:", '100' === 100);  // checks value + type (false)


  // Section 2: Conditionals and Control Flow


// Exercise 5: Using a ternary to set the schedule depending on weekend
let isWeekend = false;
let schedule = isWeekend ? "Day off" : "Work day";
console.log("Ex5:", schedule);

// Exercise 6: Simple if/else checking if user is 18 or older
let userAge = 16;
if (userAge >= 18) {
  console.log("Ex6:", "Access Granted");
} else {
  console.log("Ex6:", "Access Denied");
}

// Exercise 7: Using AND operator to make sure both conditions are true
let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
  console.log("Ex7:", "Ready to process");
}

// Exercise 8: Standard for loop that runs 5 times
console.log("Ex8:");
for (let i = 1; i <= 5; i++) {
  console.log("  iteration", i);
}

// Exercise 9: Loop that stops early when i hits 7
console.log("Ex9:");
for (let i = 0; i < 10; i++) {
  if (i === 7) break;
  console.log("  i =", i);
}

// Exercise 10: do...while loop that runs once no matter what
let counter = 10;
console.log("Ex10:");
do {
  console.log("  Running once");
  counter++;
} while (counter < 0); // won’t run again because condition is false



  // Section 3: Functions and Data Structures


// Exercise 11: Simple function that multiplies width * height
function calculateArea(width, height) {
  return width * height;
}
let resultArea = calculateArea(5, 10);
console.log("Ex11:", "resultArea =", resultArea);

// Exercise 12: Playing with an array — adding, removing, and finding index
let fruitList = ["Apple", "Banana"];
fruitList.push("Grape");   // adds to end
fruitList.shift();         // removes first item
let bananaIndex = fruitList.indexOf("Banana");
console.log("Ex12:", { fruitList, bananaIndex });

// Exercise 13: Using slice() to make a shallow copy of an array
let originalData = [1, 2, 3, { id: 4 }];
let clonedData = originalData.slice(); // makes a shallow copy
console.log("Ex13 (before):", { originalData, clonedData });

/*
  slice() only copies the first level of the array.
  If there’s an object inside, it keeps the same reference.
  So editing a nested object affects both arrays.
*/
clonedData[3].id = 99;
console.log("Ex13 (after changing nested object):", { originalData, clonedData });

// Exercise 14: Object constructor — used to make Animal objects
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
  this.speak = function () {
    return `${this.species} says ${this.sound}`;
  };
}

console.log("Ex14:", "Animal constructor defined");

// Exercise 15: Creating new Animal objects and testing them out
let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");
let animalArray = [dog, cat];

console.log("Ex15:", animalArray.map(a => a.speak()));
