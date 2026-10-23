/* JAVASCRIPT MAD LIBS — FULL-BLOCK STARTER
   Write your OWN prompt questions and story. This file deliberately does not contain a completed answer.
   Keep your JavaScript here, not inside index.html.
*/

// PART 1 — INPUTS AND VARIABLES
// TODO: Ask for AT LEAST 6 words/text responses and 2 numbers with prompt().
// TODO: Save all responses in meaningfully named variables using let or const.
// Hint: let animal = prompt("Enter an animal:");
// Hint: let age = Number(prompt("Enter an age:"));

// PART 3 — VARIABLE CHANGES AND CONCATENATION
// TODO: Reassign one let variable after its first value (use the updated value).
// TODO: Combine a quoted string and a variable with +; show the result.
// Hint: let message = "Meet " + animal;

// PART 4 — MATH OPERATORS
// TODO: Use ALL six operators with numeric values: +  -  *  /  %  **
// TODO: Store each result in a clearly named variable.
// TODO: Use at least TWO math results in your final story.
// NOTE: prompt() returns text; use Number(...) before doing math. Avoid division by zero.

// PART 5 — STORY (TEMPLATE LITERAL)
// TODO: Build one original story with BACKTICKS and ${variableName}.
// TODO: Include ALL eight prompt responses, plus at least two math results.
// Hint (not a whole story): let story = `Once, ${animal} arrived...`;
// PART 6 — DISPLAY ON THE WEBPAGE
// TODO: Uncomment and complete the line below once your story variable exists.
// document.getElementById("madlib-output").innerHTML = story;

// FINAL: Add at least three meaningful comments describing your code.
// TEST: Try TWO sets of answers and check the browser console for errors.


let person1 = prompt("Enter a name of a person:");
let person2 = prompt("Enter a name of another person:");
let place = prompt("Enter a place:");
let musicartist = prompt("Enter a music artist:");
let song = prompt("Enter a song title:");
let number1 = Number(prompt("Enter a number:"));
let animal1 = prompt("Enter an animal:");
let verb = prompt ("Enter a verb:");
let noun = prompt("Enter a noun:");
let number2= Number(prompt("Enter another number:"));
let animal2 = prompt("Enter another animal:");
let dogname = prompt("Enter a dog name:");
let food1 = prompt("Enter a food:");
let person3 = prompt("Enter a name of another person:");
let emotion = prompt("Enter an emotion:");
let weapon1 = prompt("Enter a weapon:");
let weapon2 = prompt("Enter another weapon:");
let person4 = prompt("Enter a name of another person:");
let food2 = prompt("Enter another food:");

// MATH 

number3 = number1 * number2;
number4 = number1 + number2;
let quotient = number2 / number1;
let power = number1 ** number2;
let remainder = number2 % number1;



let myStory =(`One day, <strong>${person1}</strong> was fighting <strong>${person2}</strong> in <strong>${place}</strong>, while <strong>${musicartist}</strong> was there singing <strong>${song}</strong>. Then, <strong>${number1}</strong> <strong>${animal1}s</strong> flew through the window and started <strong>${verb}</strong> because the <strong>${animal1}s</strong> were <strong>${noun}</strong>. Then, <strong>${number2}</strong> <strong>${animal2}s</strong> decided to join the fight, and then had <strong>${number3}</strong> babies with <strong>${person2}</strong>! Then, <strong>${person1}'s</strong> dog, <strong>${dogname}</strong>, walked in and decided to Doordash <strong>${food1}</strong> for everyone. But, <strong>${person3}</strong> was <strong>${emotion}</strong> and decided to gather his <strong>${number4}</strong> goons, then they all pull out their <strong>${weapon1}s</strong> and started to fight. It led to the death of <strong>${person2}</strong> and <strong>${person1}</strong> was so upset that he killed <strong>${person3}</strong> with his <strong>${weapon2}</strong>. After the battle, <strong>${remainder}</strong> goons were still alive. Then, <strong>${person4}</strong> came in with <strong>${power}</strong> boxes of <strong> ${food2}</strong> and then split all the boxes by <strong>${quotient}</strong> and gave them to <strong>${person1}</strong>. And then, <strong>${person1}</strong> and <strong>${person4}</strong> got married.`);

document.getElementById("madlib-output").innerHTML = myStory;