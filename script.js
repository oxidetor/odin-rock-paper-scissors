// declare function computerPlay that takes no inputs
function computerPlay() {
  // inside this function initialize an integer variable randNumber
  // generate a random number (either 0, 1, or 2) and store it in randNumber
  let randNumber = Math.floor(Math.random() * 3);

  // return "Rock" if randNumber is 0, "Paper" if randNumber is 1, "Scissors" if randNumber is 2
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

// declare function playRound that takes two parameters - playerSelection, computerSelection
function playRound(playerSelection, computerSelection) {
  // modify the playerSelection string to use Sentence case capitalization
  playerSelection = `${playerSelection
    .slice(0, 1)
    .toUpperCase()}${playerSelection.slice(1).toLowerCase()}`;

  // calculate whose selection "wins" and return a string that declares the winner
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
