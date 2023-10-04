const choices = ["Rock", "Paper", "Scissor"];
let botScore = 0;
let playerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const scoreDiv = document.querySelector("#score");
const childTxt = document.createElement("h2");
const childScr = document.createElement("h3");
const finalMsg = document.createElement("h1");
const restart = document.createElement("button");
// Computer choice
function getComputerChoice() {
  const choice = Math.floor(Math.random() * choices.length);
  return choices[choice].toLowerCase();
}

// User Choice
function userChoice(button) {
  return button.getAttribute("id");
}

// PlayRound Main Function
function playRound(player, bot) {
  let resultMessage = "";

  if (player === bot) {
    resultMessage = "It's a Tie";
  } else if (
    (player === "rock" && bot === "scissor") ||
    (player === "scissor" && bot === "paper") ||
    (player === "paper" && bot === "rock")
  ) {
    resultMessage = `You Win! ${player} beats ${bot}`;
    playerScore += 1;
  } else {
    resultMessage = `You Lose! ${bot} beats ${player}`;
    botScore += 1;
  }

  childTxt.textContent = resultMessage;
  childScr.textContent = `Player's Score: ${playerScore}\nComputer's Score: ${botScore}`;

  scoreDiv.innerHTML = "";
  scoreDiv.appendChild(childTxt);
  scoreDiv.appendChild(childScr);
}

// New Main Function Game to play 5 Rounds
function game() {
  const userFinal = userChoice(event.target);
  const comFinal = getComputerChoice();
  playRound(userFinal, comFinal);

  if (playerScore === 5 || botScore === 5) {
    endGame();
  }
}

// Event Listeners
rock.addEventListener("click", game);
paper.addEventListener("click", game);
scissor.addEventListener("click", game);

function endGame() {
  let resultMessage = "";
  if (playerScore === botScore) {
    resultMessage = `It's a Tie game with a score of ${playerScore} each!`;
  } else if (playerScore > botScore) {
    resultMessage = `User wins the game with ${playerScore} total points!`;
  } else {
    resultMessage = `Computer wins the game by defeating the user with a total of ${botScore} points!`;
  }

  finalMsg.textContent = resultMessage;
  scoreDiv.appendChild(finalMsg);

  restart.textContent = "Think you can do better?"
  scoreDiv.appendChild(restart)

  restart.addEventListener('click', ()=>{
    location.reload();
  })
  
}

console.log("Before the game round");
