
// 1. Deposit some amount of money to play. 

const prompt = require("prompt-sync")(); // Using the prompt-sync package for getting input from the user"

const maxLines = 3;
const cols = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOLS_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}

const Deposit = () => {

    while (true) {
        const depositAmount = prompt("Enter the amount which you want to deposit: $");

        // parseFloat function changes a number of strung into float number. "17.2" -> 17.2 as a float.
        const numberdepositAmount = parseFloat(depositAmount);

        // Checking if NumberdepositAmount is a valid number. 
        if (isNaN(numberdepositAmount) || numberdepositAmount <= 0) {
            console.log(`Please enter a valid amount.`)
        } else {
            return numberdepositAmount
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
            return linesInNumber
        }
    }
}

// 3. Select the betting amount.

const getBet = (balance, lines) => {

    while (true) {
        const bet = prompt("Enter the betting amount per line: $");

        const numberOfBet = parseFloat(bet);

        if (isNaN(numberOfBet) || numberOfBet <= 0 || numberOfBet > balance / lines) {
            console.log(`Please enter a valid amount or bet within the range of $0-balance.`)
        } else {
            return numberOfBet
        }
    }
}

// 4. Spin the Slot Machine.

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) { // Self Note: loop saves the object's keys and values in symbol and count variable which are structured as an array. 
        for (let i = 0; i < count; i++) {
            symbols.push(symbol)
        }
    }
    const reels = [];
    for (var i = 0; i < cols; i++) {
        reels.push([]);

        const reelSymbols = [...symbols];
        // The above statement copies the value stored in symbols variable to the reelSymbols variable.

        for (var j = 0; j < maxLines; j++) {

            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            // The above statement generates a random number and stores it in the randomIndex variable.

            const selectedSymbol = reelSymbols[randomIndex]
            // The above statement uses the index generated and stored in reelsIndex variable to call the Symbol which is stored at that index in reelSymbols array. 

            reels[i].push(selectedSymbol)
            // The above statemnt pushes the symbol to the reels' array.

            reelSymbols.splice(randomIndex, 1)
            // And here it removes the selectedSymbol from the reelSymbols array by giving the index as the first parameter and the count. 
        }
    }
    return reels;
}

// 5. Transposing the reels

const trnaspose = (reels) => {
    const rows = []

    for (let i = 0; i < maxLines; i++) {
        rows.push([])
        for (let j = 0; j = cols; j++) {
            rows[i].push(reels[j][i])
        }
    }
    return rows
}


const main = () => {
    let balance = Deposit()
    console.log(balance)
    const numberOflines = getNumberOflines()
    console.log(numberOflines)
    const amountForBet = getBet(balance, numberOflines)
    console.log(amountForBet)
    const reels = spin()
    console.log(reels)
}

main()