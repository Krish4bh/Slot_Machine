// 1. Deposit some amount of money to play. 

const prompt = require("prompt-sync")(); // Using the prompt-sync package for getting input from the user"

const Deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter the amount which you want to deposit: $");

        // parseFloat function changes a number of strung into float number. "17.2" -> 17.2 as a float.
        const NumberdepositAmount = parseFloat(depositAmount);

        // Checking if NumberdepositAmount is a valid number. 
        if (isNaN(NumberdepositAmount) || NumberdepositAmount <= 0) {
            console.log(`Please enter a valid amount.`)
        } else {
            const deposittedAmount = console.log(`Your $${NumberdepositAmount} has been succesfully depositted in your acount.`)
        }
    }
}

Deposit()