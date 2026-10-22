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
let food = prompt("Enter a food:");
let person3 = prompt("Enter a name of another person:");
let emotion = prompt("Enter an emotion:");
let weapon1 = prompt("Enter a weapon:");
let weapon2 = prompt("Enter another weapon:");

// MATH 

number3 = number1 * number2;
number4 = number1 + number2;




let myStory =(`One day, ${person1} was fighting ${person2} in ${place}, while ${musicartist} was there singing ${song}. Then, ${number1} ${animal1} flew through the window and started ${verb} The ${animal1}s were ${noun}. Then, ${number2} ${animal2}s decided to join the fight, and then had ${number3} babies with ${person2}! Then, ${person1}'s dog, ${dogname}, walked in and decided to Doordash ${food} for everyone. But, ${person3} was ${emotion} and decided to gather his ${number4} goons, then they all pull out their ${weapon1}s and started to fight. It led to the death of ${person2} and ${person1} was so upset that he killed {person3} with his ${weapon2}.`);

document.getElementById("madlib-output").innerHTML = myStory;