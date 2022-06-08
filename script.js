// declare function computerPlay that takes no inputs
function computerPlay() {
  // generate a random number (either 0, 1, or 2) and store it in randNumber
  let randNumber = Math.floor(Math.random() * 3);

  // return "Rock" if randNumber is 0, "Paper" if randNumber is 1, "Scissors"
  // if randNumber is 2
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

// declare function playRound that takes two parameters - playerSelection,
// computerSelection
function playRound(playerSelection, computerSelection) {
  // calculate whose selection "wins" and return a string that declares winner
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

// prompt player for their selection
function getPlayerSelection() {
  let input;
  while (true) {
    input = prompt(
      "Type one of: Rock, Paper, or Scissors (or Q/q/ESC to quit)"
    );

    if (input == null || input == "Q" || input == "q") {
      return "quit";
    }

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

// declare a function game() that takes no parameters
function game() {
  let playerScore = 0;
  let computerScore = 0;

  // Play exactly 5 rounds
  for (let currentRound = 1; currentRound <= 5; currentRound++) {
    let playerSelection = getPlayerSelection();

    if (playerSelection == "quit") {
      return "You have exited the game. Thanks for playing!";
    }

    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    // Log game info for current round
    console.group(`Round ${currentRound}`);
    console.log(`You played: ${playerSelection}`);
    console.log(`Computer played: ${computerSelection}`);
    console.log(`Result: ${result}`);
    console.groupEnd(`Round ${currentRound}`);

    // do some comparison on the return value to decide which player won
    if (result.slice(0, 8) == "You Lose") computerScore++;
    if (result.slice(0, 7) == "You Win") playerScore++;
  }

  let finalResult =
    playerScore > computerScore
      ? `Final Score: ${playerScore}:${computerScore} | You Won! 🏆️`
      : playerScore < computerScore
      ? `Final Score: ${playerScore}:${computerScore} | You Lost! 🥀`
      : `Final Score: ${playerScore}:${computerScore} | It's a Tie! 👔`;

  console.group("GAME OVER");
  console.log(finalResult);
  console.groupEnd("GAME OVER");
}
