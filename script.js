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
    return "You Lose! Paper beats Rock";
  else if (playerSelection == "Paper" && computerSelection == "Rock")
    return "You Win! Paper beats Rock";
  else if (playerSelection == "Scissors" && computerSelection == "Rock")
    return "You Lose! Rock beats Scissors";
  else if (playerSelection == "Rock" && computerSelection == "Scissors")
    return "You Win! Rock beats Scissors";
  else if (playerSelection == "Paper" && computerSelection == "Scissors")
    return "You Lose! Scissors beats Paper";
  else if (playerSelection == "Scissors" && computerSelection == "Paper")
    return "You Win! Scissors beats Paper";
  else return "Something went wrong";
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  let playerSelection = getPlayerSelection();

  if (playerSelection == "quit") {
    return "You have exited the game. Thanks for playing!";
  }

  let computerSelection = computerPlay();
  let result = playRound(playerSelection, computerSelection);

  console.log(`You played: ${playerSelection}`);
  console.log(`Computer played: ${computerSelection}`);
  console.log(`Result: ${result}`);

  if (result.slice(0, 8) == "You Lose") computerScore++;
  if (result.slice(0, 7) == "You Win") playerScore++;

  // let finalResult =
  //   playerScore > computerScore
  //     ? `Final Score: ${playerScore}:${computerScore} | You Won! 🏆️`
  //     : playerScore < computerScore
  //     ? `Final Score: ${playerScore}:${computerScore} | You Lost! 🥀`
  //     : `Final Score: ${playerScore}:${computerScore} | It's a Tie! 👔`;

  // console.group("GAME OVER");
  // console.log(finalResult);
  // console.groupEnd("GAME OVER");
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const playerSelection = e.target.innerText;
    playRound(playerSelection, computerPlay());
  })
);
