//game logic
let rock, paper, scissors;
rock = "rock";
paper = "paper";
scissors = "scissors";

function computerPLay() {
  let options = [rock, paper, scissors];
  let random = Math.floor(Math.random() * 3);

  return options[random];
}

function playRound(playerSelection, computerSelection = computerPLay()) {
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

function createElement(type, text, receptor) {
  let element = document.createElement(type);
  element.textContent = text;
  receptor.append(element);
}

createElement("button", "rock", container);
createElement("button", "paper", container);
createElement("button", "scissors", container);
createElement("div", "", container);

let textDiv = container.querySelector("div");

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener(
    "click",
    (e) => (textDiv.textContent = e.target.textContent)
  );
});

//playGame(roundsChoice);
