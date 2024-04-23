//ATM APPLICATION//
//#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 15000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "Q1",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin)
    console.log("correct pin code!!!");
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance"]
    }
]);
console.log(operationAns);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number",
        }
    ]);
    myBalance -= amountAns.amount;
    console.log("your remaining balance is :" + myBalance);
}
else if (operationAns.operation === "check balance") {
    console.log("yourbalance is " + myBalance);
}
else {
    console.log("Incorrect pin number");
}
