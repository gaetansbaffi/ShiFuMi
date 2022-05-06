//Variables
let rock, paper, scissors;
rock = "rock";
paper = "paper";
scissors = "scissors";
let vScore = 0;
let pScore = 0;
let container = document.querySelector("#container");

// UI logic

function createElement(type, text, receptor, id = "") {
  let element = document.createElement(type);
  element.textContent = text;
  receptor.append(element);
  element.setAttribute("id", id);
}

function setUi() {
  createElement("button", "rock", container);
  createElement("button", "paper", container);
  createElement("button", "scissors", container);
  createElement("div", "Play a game!", container, "textDiv");
  createElement("div", `Your's Score: ${pScore}`, container, "pScore");
  createElement("div", `Vilain's Score: ${vScore}`, container, "vScore");

  let buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => playRound(e.target.textContent));
  });
}

function reset() {
  vScore = pScore = 0;
  container.innerHTML = "";
}

setUi();

//game logic
//random choice
function computerPLay() {
  let options = [rock, paper, scissors];
  let random = Math.floor(Math.random() * 3);
  return options[random];
}

//single round logic
function playRound(playerSelection, computerSelection = computerPLay()) {
  let textDiv = container.querySelector("#textDiv");
  let vilainScoreDiv = container.querySelector("#vScore");
  let playerScoreDiv = container.querySelector("#pScore");
  console.log(textDiv);
  if (playerSelection === computerSelection) {
    return (textDiv.textContent = "it's a tie!");
  } else if (
    //win
    (playerSelection == rock && computerSelection == scissors) ||
    (playerSelection == paper && computerSelection == rock) ||
    (playerSelection == scissors && computerSelection == paper)
  ) {
    {
      pScore += 1;
      if (pScore < 5) {
        playerScoreDiv.textContent = `Your's Score: ${pScore}`;
        return (textDiv.textContent = "You win this round!");
      } else {
        container.textContent = "You win !";
        createElement("button", "play again?", container);
        let button = container.querySelector("button");
        button.addEventListener("click", playAgain);
        return;
      }
    }
  }
  //Lose
  else {
    vScore += 1;
    if (vScore < 5) {
      vilainScoreDiv.textContent = `Vilain's Score: ${vScore}`;
      return (textDiv.textContent = "You lose!");
    } else {
      container.textContent = "You lose !";
      createElement("button", "play again?", container);
      let button = container.querySelector("button");
      button.addEventListener("click", playAgain);
      return;
    }
  }
}

function playAgain() {
  reset();
  setUi();
}
