// HW4 JavaScript Foundations



  // Section 1: Basic Rules and Data Types


// #1: Fixed the naming and formatting to follow JS conventions
let thisIsANewVariable = 10;
if (thisIsANewVariable === 10) {
  console.log("#1) thisIsANewVariable is 10");
}

// #2: Variables for different data types
let welcomeMessage = `Hello, world!`; // string using backticks
let piApprox = 3.14159;               // number (float)
let isActive = true;                  // boolean (true/false)
console.log("#2)", { welcomeMessage, piApprox, isActive });

// #3: Added a quick comment explaining what the variable does
// Stores the user's current score out of 100
let currentScore = 95;
console.log("#3)", currentScore);

// #4: Checking equality vs strict equality
console.log("#4) == :", '100' == 100);   // checks just value (true)
console.log("#4) ===:", '100' === 100);  // checks value + type (false)


  // Section 2: Conditionals and Control Flow


// #5: Using a ternary to set the schedule depending on weekend
let isWeekend = false;
let schedule = isWeekend ? "Day off" : "Work day";
console.log("#5)", schedule);

// #6: Simple if/else checking if user is 18 or older
let userAge = 16;
if (userAge >= 18) {
  console.log("#6) Access Granted");
} else {
  console.log("#6) Access Denied");
}

// #7: Using AND operator to make sure both conditions are true
let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
  console.log("#7) Ready to process");
}

// #8: Standard for loop that runs 5 times
console.log("#8)");
for (let i = 1; i <= 5; i++) {
  console.log("  iteration", i);
}

// #9: Loop that stops early when i hits 7
console.log("#9)");
for (let i = 0; i < 10; i++) {
  if (i === 7) break;
  console.log("  i =", i);
}

// #10: do...while loop that runs once no matter what
let counter = 10;
console.log("#10)");
do {
  console.log("  Running once");
  counter++;
} while (counter < 0); // won’t run again because condition is false



  // Section 3: Functions and Data Structures


// #11: Simple function that multiplies width * height
function calculateArea(width, height) {
  return width * height;
}
let resultArea = calculateArea(5, 10);
console.log("#11) resultArea =", resultArea);

// #12: Playing with an array — adding, removing, and finding index
let fruitList = ["Apple", "Banana"];
fruitList.push("Grape");   // adds to end
fruitList.shift();         // removes first item
let bananaIndex = fruitList.indexOf("Banana");
console.log("#12)", { fruitList, bananaIndex });

// #13: Using slice() to make a shallow copy of an array
let originalData = [1, 2, 3, 4, 5, { id: 10 }];
let clonedData = originalData.slice(); // makes a shallow copy
console.log("#13) (before):", { originalData, clonedData });
clonedData[5].id = 20;
console.log("#13) (after changing nested object):", { originalData, clonedData });

// #14: Object constructor, used to make Animal objects
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
  this.speak = function () {
    return `${this.species} says ${this.sound}`;
  };
}

console.log("#14) Animal constructor created");

// #15: Creating new Animal objects and testing them out
let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");
let animalArray = [dog, cat];

console.log("#15)", animalArray.map(a => a.speak()));
