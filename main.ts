#! /use/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { log } from "console";

const answers: {
    numberOne: number,
    numberTwo: number,
    operator: string
} = await inquirer.prompt([
    {type: "number",
     name: "numberOne",
    message: "Enter Your First Number"
},
{ type: "number",
name: "numberTwo",
message: "Enter Your Second Number"
},
{ type: "list",
name: "operator",
message: "Enter Your Operator",
choices: ["+", "-", "*", "/"]
}
])
// Switch Case
const { numberOne, numberTwo, operator } = answers;

let result

switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log(chalk.red("Invalid Operator"));
        break;
}
console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);
