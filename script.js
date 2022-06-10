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

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) return "Tie";
  else if (playerSelection == "Rock" && computerSelection == "Paper")
    return computerScore++, "You Lose! Paper beats Rock";
  else if (playerSelection == "Paper" && computerSelection == "Rock")
    return playerScore++, "You Win! Paper beats Rock";
  else if (playerSelection == "Scissors" && computerSelection == "Rock")
    return computerScore++, "You Lose! Rock beats Scissors";
  else if (playerSelection == "Rock" && computerSelection == "Scissors")
    return playerScore++, "You Win! Rock beats Scissors";
  else if (playerSelection == "Paper" && computerSelection == "Scissors")
    return computerScore++, "You Lose! Scissors beats Paper";
  else if (playerSelection == "Scissors" && computerSelection == "Paper")
    return playerScore++, "You Win! Scissors beats Paper";
  else return "Something went wrong";
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".btn");
const roundResult = document.querySelector("#round-result");
const playerSelectionDiv = document.querySelector("#player-selection");
const computerSelectionDiv = document.querySelector("#computer-selection");
const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const playerSelection = e.target.innerText;
    const computerSelection = computerPlay();
    roundResult.innerText = playRound(playerSelection, computerSelection);

    playerSelectionDiv.innerText = `You Played: ${playerSelection}`;
    computerSelectionDiv.innerText = `Computer Played: ${computerSelection}`;

    playerScoreDiv.innerText = playerScore;
    computerScoreDiv.innerText = computerScore;
  })
);

// console.log(`You played: ${playerSelection}`);
// console.log(`Computer played: ${computerSelection}`);
// console.log(`Result: ${result}`);

// let finalResult =
//   playerScore > computerScore
//     ? `Final Score: ${playerScore}:${computerScore} | You Won! 🏆️`
//     : playerScore < computerScore
//     ? `Final Score: ${playerScore}:${computerScore} | You Lost! 🥀`
//     : `Final Score: ${playerScore}:${computerScore} | It's a Tie! 👔`;

// console.group("GAME OVER");
// console.log(finalResult);
// console.groupEnd("GAME OVER");
