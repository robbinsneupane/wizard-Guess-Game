// generate a random number between 1 and 100
let magicNumber = Math.floor(Math.random() * 100) + 1;

// get references to the form, input field, result and guess counter elements
const form = document.querySelector("form");
const input = document.querySelector("#guess");
const result = document.querySelector("#result");
const guessCounter = document.querySelector("#guesses");
const wizard = document.querySelector("#wizard");

let guesses = 0;

// add event listener to the form to handle guesses
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const guess = parseInt(input.value);
  if (guess === magicNumber) {
    result.textContent = `Congratulations! ${guess} is the magic number.`;
    form.classList.add("disabled");
    wizard.classList.add("active");
    setTimeout(() => {
      resetGame();
      wizard.classList.remove("active");
    }, 4000);
  } else if (guess < magicNumber) {
    result.textContent = `${guess} is too low. Try again.`;
  } else {
    result.textContent = `${guess} is too high. Try again.`;
  }
  guesses++;
  guessCounter.textContent = guesses;
  input.value = "";
});

// define a function to reset the game
function resetGame() {
  // reset the magic number
  magicNumber = Math.floor(Math.random() * 100) + 1;

  // reset the form and result elements
  form.classList.remove("disabled");
  result.textContent = "";
  guessCounter.textContent = "0";
  guesses = 0;
  input.value = "";

  // add focus to the input field
  input.focus();
}
