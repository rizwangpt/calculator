#! /usr/bin/env node

import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponention", "Modulus"],
  },
]);


// Conditional Statement
if (asnwer.operator === "Addition") {
    console.log(asnwer.firstNumber + asnwer.secondNumber);
} else if(asnwer.operator === "Subtraction") {
    console.log(asnwer.firstNumber - asnwer.secondNumber);
} else if(asnwer.operator === "Multiplication") {
    console.log(asnwer.firstNumber * asnwer.secondNumber);
} else if(asnwer.operator === "Division") {
    console.log(asnwer.firstNumber / asnwer.secondNumber);
} else if(asnwer.operator === "Exponention") {
    console.log(asnwer.firstNumber ** asnwer.secondNumber);
} else if(asnwer.operator === "Modulus") {
    console.log(asnwer.firstNumber % asnwer.secondNumber);
} else{
    console.log("Please select Valid Operator")
}
console.log("THE END");