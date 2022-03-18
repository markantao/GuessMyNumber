'use strict';
// // Manipulating an input field
// document.querySelector('.guess').value = 23;
// // For inputs, use the '.value' method
// console.log(document.querySelector('.guess').value);

// Handling Click Events

// You must use an event listener

// When '.check' (button: Check!) is clicked
// there is a function that logs the value
// of the number given in the input field

// Getting the Random Number
const number = Math.trunc(Math.random()*20)+1;


let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener(
    'click',
    function() {
        const guess = Number(document.querySelector('.guess').value);
        console.log(typeof guess);
        // No number at all
        if (!guess) {
            document.querySelector('.message').textContent =
            'No Number Selected!'
        // Number is corrext
    } else if (guess === number) {
        document.querySelector('.message').textContent = 
        'Correct Number Selected!'

        // Displaying Correct Number
        document.querySelector('.number').textContent = number;

        //Changing color of website if player wins

        //Selecting class
        document.querySelector('body').style.
        backgroundColor = "#60b347";

        document.querySelector('.number').style.
        width = "30rem";

        document.querySelector('.again').textContent
        = "Reset Game"

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent
            = highScore;
        }

        //Reset Button Click Event

        document.querySelector('.again').addEventListener(
            'click',
            function() {
                score = 20

                //Number Width
                document.querySelector('.number').style.
                width = '15rem';
                
                //Input box
                document.querySelector('.guess').value = '';

                // Number Box
                document.querySelector('.number').textContent
                = '?';
                
                // Color of Page
                document.querySelector('body').style.
                backgroundColor = "#222";

                // Reseting Score
                document.querySelector('.score').textContent 
                = score;

                // Resetting Message
                document.querySelector('.message').textContent
                = "Start Guessing"

                document.querySelector('.again').textContent
                = "Again"
            }
        )



        // Number is greater than number    
    } else if (guess > number) {
        if(score > 0) {

        document.querySelector('.message').textContent = 
        'Number is too high! Guess again.'
        score = score - 1;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
            'Sorry, Play Again.'
        }   
    } else if (guess < number) {
        if(score > 0) {

            document.querySelector('.message').textContent = 
            'Number is too low! Guess again.'
            score = score - 1;
            document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent =
                'Sorry, Play Again.'
            } 
    }
    }
)


