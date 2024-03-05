
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

function checkGuess() {
    
    const userGuess = parseInt(document.getElementById('guessInput').value);

    const message = document.getElementById('message');

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
