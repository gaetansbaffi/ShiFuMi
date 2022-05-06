let rock, paper, scissors;
rock = "rock";
paper = "paper";
scissors = "scissors";
let roundsChoice = parseInt(prompt("how many rounds would you like to play?"));

function computerPLay() {
  let options = [rock, paper, scissors];
  let random = Math.floor(Math.random() * 3);

  return options[random];
}

function game(playerSelection, computerSelection = computerPLay()) {
  console.log(`player = ${playerSelection}, computer = ${computerSelection}`);
  if (playerSelection === computerSelection) {
    return console.log("it's a tie!");
  } else if (
    (playerSelection == rock && computerSelection == scissors) ||
    (playerSelection == paper && computerSelection == rock) ||
    (playerSelection == scissors && computerSelection == paper)
  ) {
    {
      return console.log("you win");
    }
  } else {
    return console.log("you lose");
  }
}

function playAgain() {
  let answer = prompt("would you like to play again?");
  if (answer == "yes") {
    let newRounds = parseInt(prompt("how many rounds would you like to play?"));
    return rounds(newRounds);
  } else {
    return console.log("bye then!");
  }
}

function rounds(rounds) {
  for (let index = 1; index <= rounds; index++) {
    let choice = prompt("choose between rock, paper, scissors");
    game(choice);
  }
  playAgain();
}

rounds(roundsChoice);
