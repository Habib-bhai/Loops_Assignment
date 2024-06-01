import inquirer from "inquirer"

// Steps to Follow:
// 1. Set a maximum value: Create a variable to store the maximum value for the number
// guessing game.
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a
// random number between 1 and the maximum value. Log this value to the console for
// development purposes.
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set
// it to false initially.
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
// correct guess is made.

// 6. Check the user's guess: Inside the loop, check if the current guess matches the random
// number. Provide feedback if the guess is too high or too low.

let maximum = 50

let randomNumber = Math.floor(Math.random() * maximum +1)
console.log(randomNumber);

let guessStatus = false
let predefinedGuesses = [1,8,9,10,11,15,20,25,28,29,35,40,44,41,45,50]


while(!guessStatus){
    
        for (const iterator of predefinedGuesses) {
                if(iterator === randomNumber){
                        console.log("you guessed it right");
                        console.log(`Your guess: ${iterator}\n The Random number: ${randomNumber}`);
                        guessStatus= true
                        break;            
                    }
            
                    else if (iterator> randomNumber) {
                            console.log("Too high guess a smaller number");
            
                        }
                
                    else if (iterator< randomNumber){
                            console.log("Too low guess a higher number");
        
    }
    }

}


// ANOTHER LOGIC FOR DOING THE SAME TASK BUT THIS TIME WITH USER INPUT USING INQUIRER



// let randomNumber = Math.floor(Math.random() * 50 +1)


// let guess= 0
// while(guess!= randomNumber){
//     let {inputNumber} = await inquirer.prompt(
//         {
//             name: "inputNumber",
//             type: "number",
//             message: "GAME STARTED! Guess a number"
//         }
//     )
//     guess= inputNumber
//     if(guess === randomNumber){
//         console.log(`Congratulations you guessed it right! ${guess}`);
//         break
//     }
//     else if(guess  > randomNumber){
//         console.log("Too high guess a smaller number");
        
//     }
//     else if(guess < randomNumber){
//         console.log("Too low guess a higher number");
        
//     }

// }