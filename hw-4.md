The following assignment contains 15 coding exercises designed to test your ability to implement the foundational concepts, rules, data types, control flow, functions, objects, and array methods detailed in the source material.

## JavaScript Foundations Coding Assignment

### Instructions

For all the exercises, write the requested JavaScript code in a new .js file. Use console.log() to make verify your solution to each exercise. Solutions must adhere to standard JavaScript rules like using **camelCase** for variable names and ending statements with **semicolons**.

---

### Section 1: Basic Rules and Data Types

#### Exercise 1: Formatting and Naming (Code Correction)

The following code snippet violates standard JavaScript conventions regarding naming, indentation, and termination. Correct the code to follow **camelCase**, proper whitespace/indentation, and the use of semicolons.

```javascript
var thisisanewvariable = 10;
if (thisisanewvariable == 10) {
  // code block
}
```

#### Exercise 2: Defining Core Data Types (Coding)

Write three separate variable declarations using the `let` keyword to store the following data types. Ensure the variable names are in **camelCase**:

1. A **string** using backticks (template string definition).
2. A **number** that is a float.
3. A **boolean** value of `true` (must be written without quotation marks).

#### Exercise 3: Single-Line Comments (Coding)

Add a single-line comment to the following variable assignment that explains to a human reader the purpose of the variable.

```javascript
let currentScore = 95;
```

#### Exercise 4: Equality Comparison (Coding)

Using `console.log()`, write two separate comparisons between the string `'100'` and the number `100`.

1. Use the operator that checks for **value equality** (`==`).
2. Use the operator that checks for **absolute strict equality** (`===`).

---

### Section 2: Conditionals and Control Flow

#### Exercise 5: Ternary Operator (Coding)

The **Ternary Operator** allows IF/ELSE logic in a single line. Write a Ternary Operator that checks if the variable `isWeekend` is `true`. If true, assign the string `"Day off"` to the variable `schedule`, otherwise assign `"Work day"`.

```javascript
let isWeekend = false;
let schedule;
// Write Ternary Operator
```

#### Exercise 6: If/Else Structure (Coding)

Write an `if/else` statement that checks the variable `userAge`. If `userAge` is greater than or equal to 18, log the message `"Access Granted"`. Otherwise, if the condition is **not met**, log the message `"Access Denied"`.

```javascript
let userAge = 16;
// Write if/else statement
```

#### Exercise 7: Logical AND Operator (Coding)

Write an `if` statement using the **AND operator (`&&`)**. The code block should only execute if **both** `hasPermission` is `true` AND `itemCount` is less than 5. If both are true, log `"Ready to process"`.

```javascript
let hasPermission = true;
let itemCount = 3;
// Write if statement using AND operator:
```

#### Exercise 8: For Loop (Coding)

Write a standard **`for` loop** that runs exactly 5 times. Inside the loop, log the current iteration number (starting from 1).

#### Exercise 9: Loop Control (Coding)

Write a `for` loop that iterates from 0 to 9. Use the **`break`** keyword to terminate the loop early if the iteration number reaches 7.

#### Exercise 10: Ensuring Execution (Coding)

The **`do while` loop** ensures the core block runs at least once. Write a `do while` loop using the variable `counter` that logs `"Running once"` inside the `do` block. Set the `while` condition such that the loop never repeats.

```javascript
let counter = 10;
// Write do while loop:
```

---

### Section 3: Functions and Data Structures

#### Exercise 11: Function Definition (Coding)

Define a function named `calculateArea`. This function must accept two **parameters** (`width` and `height`), multiply them, and use a **return value** to send the result back to the caller. Then, call the function with the **arguments** 5 and 10, and store the result in a variable named `resultArea`.

#### Exercise 12: Array Manipulation (Coding)

Define an array named `fruitList` initialized with `['Apple', 'Banana']`. Then, write the code necessary to:

1. Add the string `'Grape'` to the **end** of the array.
2. Remove the **first** item (`'Apple'`) from the array.
3. Log the **index number** of `'Banana'`.

#### Exercise 13: Array Copying (Coding)

Define an array named `originalData`. Use the **`slice` method** to create a **separate copy** of `originalData` and store it in a new variable named `clonedData`. What type of copy does slice do. What should you be aware of when you do this type of copy?

```javascript
let originalData =;
// Write slice method:
```

#### Exercise 14: Object Constructor (Coding)

Create an **Object Constructor** function named `Animal` (capitalizing the first letter to signify it is an object). The constructor should accept `species` and `sound` as parameters. Use the **`this` keyword** to assign these properties to the object being created.

#### Exercise 15: Object Instantiation (Coding)

Using the `Animal` constructor from Exercise 14, create two new instances of objects:

1. `dog` (species: "Canine", sound: "Woof")
2. `cat` (species: "Feline", sound: "Meow")

Store both of these new object instances inside an array named `animalArray`.
