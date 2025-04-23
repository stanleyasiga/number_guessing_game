#!/usr/bin/env node

//
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `Enter your choice:`,
});

console.log(
  `\nWelcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chances to guess the correct number.`
);

console.log(`\nPlease select the difficulty level:
1. Easy (10 chances) 
2. Medium (5 chances)
3. Hard (3 chances)\n`);

const handleInput = (line) => {
  switch (line.trim) {
    case 1:
      console.log("You selected option 1");
      break;
    case 2:
      console.log("You selected option 2");
      break;
    case "exit":
      console.log("Exiting...");
      rl.close();
      return;
    default:
      console.log(`Unknown option: "${line.trim()}"`);
  }
  rl.prompt();
};

rl.prompt();

rl.on("line", handleInput);
