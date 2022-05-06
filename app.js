let rock, paper, scissors;
rock = "rock";
paper = "paper";
scissors = "scissors";
let choice = prompt("choose between rock, paper, scissors");

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

game(choice);
