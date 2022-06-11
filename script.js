let playerScore = 0;
let computerScore = 0;

const playerButtons = document.querySelectorAll("#player-btns .btn img");

playerButtons.forEach((playerButton) =>
  playerButton.addEventListener(
    "click",
    (e) => {
      const playerSelection = e.target.alt;
      const computerSelection = computerPlay();

      removeSelectedStyle();
      removeGreyedOutStyle();

      playerTarget = e.target.parentNode;
      const computerTarget = document.querySelector(
        `#computer-btns img[alt="${computerSelection}"]`
      ).parentNode;

      styleUnselectedSiblings(playerTarget);
      styleUnselectedSiblings(computerTarget);
      addSelectedStyle(playerTarget, computerTarget);

      updateSelectionInfo(playerSelection, computerSelection);

      updateResults(playerSelection, computerSelection);
      updateScores();
      checkForWinner();
    },
    {
      capture: false,
    }
  )
);

const allButtons = document.querySelectorAll(".btn");

allButtons.forEach((button) =>
  button.addEventListener("transitionend", removeTransition)
);

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

function updateSelectionInfo(playerSelection, computerSelection) {
  const playerSelectionDiv = document.querySelector("#player-selection");
  const computerSelectionDiv = document.querySelector("#computer-selection");
  playerSelectionDiv.innerText = `You Played: ${playerSelection}`;
  computerSelectionDiv.innerText = `Computer Played: ${computerSelection}`;
}

function addSelectedStyle(playerTarget, computerTarget) {
  playerTarget.classList.add("clicked", "selected");
  computerTarget.classList.add("clicked", "selected");
}

function updateResults(playerSelection, computerSelection) {
  const results = document.querySelector("#results");
  results.innerText = playRound(playerSelection, computerSelection);
}

function updateScores() {
  const playerScoreDiv = document.querySelector("#player-score");
  const computerScoreDiv = document.querySelector("#computer-score");
  playerScoreDiv.innerText = playerScore;
  computerScoreDiv.innerText = computerScore;
}

function getAllSiblings(element, parent) {
  const children = [...parent.children];
  return children.filter((child) => child !== element);
}

function styleUnselectedSiblings(target) {
  unselected = getAllSiblings(target, target.parentNode);
  unselected.forEach((sibling) => sibling.classList.add("greyed-out"));
}

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
