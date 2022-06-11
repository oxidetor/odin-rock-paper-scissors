function computerPlay() {
  let randNumber = Math.floor(Math.random() * 3);

  switch (randNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    default:
      break;
  }
}

function getPlayerSelection() {
  let input;
  while (true) {
    input = prompt(
      "Type one of: Rock, Paper, or Scissors (or Q/q/ESC to quit)"
    );

    if (input == null || input == "Q" || input == "q") {
      return "quit";
    }

    // Trim whitespace and capitalize first letter of input (rest lowercase)
    input = `${input.trim().slice(0, 1).toUpperCase()}${input
      .trim()
      .slice(1)
      .toLowerCase()}`;

    if (input == "Rock" || input == "Paper" || input == "Scissors") break;
    else {
      alert("Bad input. Try again!");
    }
  }
  return input;
}

function chooseWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) return 0;
  else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  )
    return 1;
  else return 2;
}

function playRound(playerSelection, computerSelection) {
  switch (chooseWinner(playerSelection, computerSelection)) {
    case 0:
      return "Tie";
    case 1:
      return (
        playerScore++, `You Win! ${playerSelection} beats ${computerSelection}`
      );
    case 2:
      return (
        computerScore++,
        `You Lose! ${computerSelection} beats ${playerSelection}`
      );
  }
}

let playerScore = 0;
let computerScore = 0;

const playerButtons = document.querySelectorAll("#player-btns .btn img");
const allButtons = document.querySelectorAll(".btn");
const results = document.querySelector("#results");
const playerSelectionDiv = document.querySelector("#player-selection");
const computerSelectionDiv = document.querySelector("#computer-selection");
const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");

playerScoreDiv.innerText = "0";
computerScoreDiv.innerText = "0";
playerSelectionDiv.innerText = "You played: ";
computerSelectionDiv.innerText = "Computer played: ";
results.innerText = "(First to win 5 rounds wins it all!)";

playerButtons.forEach((playerButton) =>
  playerButton.addEventListener(
    "click",
    (e) => {
      removeSelectedStyle(e);
      removeGreyedOutStyle(e);

      results.innerText = "";
      playerTarget = e.target.parentNode;
      console.log(playerTarget);

      const playerSelection = e.target.alt;
      const computerSelection = computerPlay();

      const computerTarget = document.querySelector(
        `#computer-btns img[alt="${computerSelection}"]`
      ).parentNode;

      playerUnselected = getAllSiblings(playerTarget, playerTarget.parentNode);
      computerUnselected = getAllSiblings(
        computerTarget,
        computerTarget.parentNode
      );

      playerUnselected.forEach((unselected) =>
        unselected.classList.add("greyed-out")
      );
      computerUnselected.forEach((unselected) =>
        unselected.classList.add("greyed-out")
      );

      playerTarget.classList.add("clicked", "selected");
      computerTarget.classList.add("clicked", "selected");

      results.innerText = playRound(playerSelection, computerSelection);

      playerSelectionDiv.innerText = `You Played: ${playerSelection}`;
      computerSelectionDiv.innerText = `Computer Played: ${computerSelection}`;

      playerScoreDiv.innerText = playerScore;
      computerScoreDiv.innerText = computerScore;

      checkForWinner();
    },
    {
      capture: false,
    }
  )
);

function getAllSiblings(element, parent) {
  const children = [...parent.children];
  return children.filter((child) => child !== element);
}

allButtons.forEach((button) =>
  button.addEventListener("transitionend", removeTransition)
);

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("clicked");
}

function removeSelectedStyle(e) {
  allButtons.forEach((button) => button.classList.remove("selected"));
}

function removeGreyedOutStyle(e) {
  allButtons.forEach((button) => button.classList.remove("greyed-out"));
}

const finalResults = document.querySelector(".final-results");

function checkForWinner() {
  if (playerScore == 5 || computerScore == 5) {
    let resultText = `GAME OVER. ${
      playerScore == 5 ? " You Won! 🏆️" : "You Lost 🥀"
    }`;
    results.innerText = resultText;

    playerScore = 0;
    computerScore = 0;
  }
}
