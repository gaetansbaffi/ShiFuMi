//game logic
let rock, paper, scissors;
rock = "rock";
paper = "paper";
scissors = "scissors";
let vScore = 0;
let pScore = 0;

//random choice
function computerPLay() {
  let options = [rock, paper, scissors];
  let random = Math.floor(Math.random() * 3);
  return options[random];
}

//single round logic
function playRound(playerSelection, computerSelection = computerPLay()) {
  if (playerSelection === computerSelection) {
    return (textDiv.textContent = "it's a tie!");
  } else if (
    (playerSelection == rock && computerSelection == scissors) ||
    (playerSelection == paper && computerSelection == rock) ||
    (playerSelection == scissors && computerSelection == paper)
  ) {
    {
      pScore += 1;
      playerScoreDiv.textContent = `Your's Score: ${pScore}`;
      return (textDiv.textContent = "You win!");
    }
  } else {
    vScore += 1;
    vilainScoreDiv.textContent = `Vilain's Score: ${vScore}`;
    return (textDiv.textContent = "You lose!");
  }
}

function playAgain() {
  let answer = prompt("would you like to play again?");
  if (answer == "yes") {
    let newRounds = parseInt(prompt("how many rounds would you like to play?"));
    return playGame(newRounds);
  } else {
    return console.log("bye then!");
  }
}

function playGame(rounds) {
  for (let index = 1; index <= rounds; index++) {
    let choice = prompt("choose between rock, paper, scissors");
    playRound(choice);
  }
  playAgain();
}

// UI logic
let container = document.querySelector("#container");

function createElement(type, text, receptor, id = "") {
  let element = document.createElement(type);
  element.textContent = text;
  receptor.append(element);
  element.setAttribute("id", id);
}

createElement("button", "rock", container);
createElement("button", "paper", container);
createElement("button", "scissors", container);
createElement("div", "", container);
createElement("div", `Your's Score: ${pScore}`, container, "pScore");
createElement("div", `Vilain's Score: ${vScore}`, container, "vScore");

let textDiv = container.querySelector("div");
let vilainScoreDiv = container.querySelector("#vScore");
let playerScoreDiv = container.querySelector("#pScore");

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => playRound(e.target.textContent));
});
