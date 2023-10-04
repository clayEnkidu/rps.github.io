const arr = ["Rock", "Paper", "Scissor"]
let computerSelection;
let botScore = 0;
let playerScore = 0;
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const sci = document.querySelector("#scissor")


//Computer choice
function getComputerChoice() {

  let choice = Math.floor(Math.random() * arr.length)
  computerSelection = arr[choice].toLowerCase()
  return computerSelection

}

//User Choice
function userChoice(button) {
  const user = button.getAttribute("id");
  console.log(user)
  return user;
}


const scoreDiv = document.querySelector("#score")
const childTxt = document.createElement("h2")
const childScr = document.createElement("h3")
//PlayRound Main Function
function playRound(player, bot) {

  // Compare if both choosed equal or not
  if (player == bot) {
    console.log("It's An Tie")
  }

  //If bot/Computer wins!
  else if (player == "rock" && bot == "paper"
    || player == "paper" && bot == "scissor"
    || player == "scissor" && bot == "rock"
  ) {
    childTxt.textContent =  `You Lose! ${bot} beats ${player}`;
    botScore += 1;
  }

  else {
    childTxt.textContent = `You won! ${player} beats ${bot}`;
    playerScore += 1;

  }

  childScr.textContent = `Player's Score: ${playerScore}\nComputer's Score: ${botScore}`

  scoreDiv.appendChild(childTxt);
  scoreDiv.appendChild(childScr);

  
}


// New Main Function GAme to play 5 Rounds!

console.log("Before game round")
function game(us, pc) {
  console.log("Game Started!")
  playRound(us, pc)
}


let userFinal = userChoice()
console.log("UserCHoose: " + userFinal)
let comFinal = getComputerChoice()
console.log("Computer CHoose: " + comFinal)

document.addEventListener("DOMContentLoaded", ()=>{

  game(userChoice(), getComputerChoice());
})


let player = parseInt(playerScore)
let bot = parseInt(botScore)

if (player == bot) {
  console.log(`It's an tie game with score of ${playerScore} each!`)
}
else if (player > bot) {
  console.log(`User wins the game with ${player} total points!`)
}
else {
  console.log(`Computer wins the game by defeating the user with total of ${bot} points!`)
}