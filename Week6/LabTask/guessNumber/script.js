
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

function checkGuess() {
    // Get user's guess from input field
    const userGuess = parseInt(document.getElementById('guessInput').value);

    // Get message element
    const message = document.getElementById('message');

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        message.textContent = 'Congratulations! You guessed the correct number!';
        message.style.color = 'green';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try a higher number.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Too high! Try a lower number.';
        message.style.color = 'red';
    }
}
