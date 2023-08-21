const maxLines = 3;

// 1. Deposit some amount of money to play. 

const prompt = require("prompt-sync")(); // Using the prompt-sync package for getting input from the user"

const Deposit = () => {

    while (true) {
        const depositAmount = prompt("Enter the amount which you want to deposit: $");

        // parseFloat function changes a number of strung into float number. "17.2" -> 17.2 as a float.
        const numberdepositAmount = parseFloat(depositAmount);

        // Checking if NumberdepositAmount is a valid number. 
        if (isNaN(numberdepositAmount) || numberdepositAmount <= 0) {
            console.log(`Please enter a valid amount.`)
        } else {
            return `You have deposited $${numberdepositAmount} amount to your account.`
        }
    }
}



// 2. Determine the number of lines to bet on. 

const getNumberOflines = () => {

    while (true) {
        const numberOflines = prompt(`Enter the number of lines to bet on (1-${maxLines}): `);

        // Repeating the parseFloat function to check if the entered value is a number/Float.
        const linesInNumber = parseFloat(numberOflines)

        // Repeating the checking stage of the number.
        if (isNaN(numberOflines) || numberOflines <= 0 || numberOflines > 3) {
            console.log(`Please enter the valid value between 1-${maxLines}.`)
        } else {
            return `${linesInNumber} lines are selected to place bet.`
        }
    }
}

// 3. Select the betting amount.

const getBet = (balance) => {

    while (true) {
        const bet = prompt("Enter the betting amount: $");

        const numberOfBet = parseFloat(bet);

        if (isNaN(numberOfBet > balance || numberOfBet) || numberOfBet <= 0) {
            console.log(`Please enter a valid amount or bet within the range of 0-balance.`)
        } else {
            return numberOfBet
        }
    }
}

const main = () => {
    let balance = Deposit()
    console.log(balance)
    const numberOflines = getNumberOflines()
    console.log(numberOflines)
    const amountForBet = getBet(balance)
    console.log(amountForBet)
}

main()