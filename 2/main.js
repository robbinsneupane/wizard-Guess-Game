let min = 1;
let max = 100;
let guess = Math.floor(Math.random() * (max - min + 1) + min);
let guessText = document.getElementById("guess");
const wizard = document.querySelector("#wizard");

guessText.innerHTML = guess;

const startTime = performance.now();

document.getElementById("higher-btn").addEventListener("click", function () {
  min = guess + 1;
  guess = Math.floor(Math.random() * (max - min + 1) + min);
  guessText.innerHTML = guess;
});

document.getElementById("lower-btn").addEventListener("click", function () {
  max = guess - 1;
  guess = Math.floor(Math.random() * (max - min + 1) + min);
  guessText.innerHTML = guess;
});

document.getElementById("correct-btn").addEventListener("click", function () {
  // alert("The wizard guessed your number!");
  wizard.classList.add("active");
  const endTime = performance.now();
  const timeTaken = (endTime - startTime) / 1000;
  // alert(`The wizard guessed your number in ${timeTaken.toFixed(2)} seconds!`);
  resetGame();
});

function resetGame() {
  min = 1;
  max = 100;
  guess = Math.floor(Math.random() * (max - min + 1) + min);
  guessText.innerHTML = guess;
  setTimeout(() => wizard.classList.remove("active"), 2500);
}
