#! /usr/bin/env node
import inquirer from "inquirer";
console.log("--------------------------------------");
console.log("Welcome To My Number Guessing Game");
console.log("--------------------------------------");
const rendum_number = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
  {
    name: "playerguessednumber",
    type: "number",
    message: "Please Enter Number between 1 10 6",
  },
]);
if (answer.playerguessednumber === rendum_number) {
  console.log("----------------------------------");
  console.log("Ary Waaaah! You Winnnnn");
  console.log("----------------------------------");
} else {
  console.log("----------------------------------");
  console.log("Ohoooo! You lose Try Again");
  console.log("----------------------------------");
}
