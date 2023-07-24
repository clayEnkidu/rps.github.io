const arr = ["Rock", "Paper", "Scissor"]
let computerSelection;
let botScore = 0;
let playerScore = 0;

//Computer choice
function getComputerChoice() {

  let choice = Math.floor(Math.random() * arr.length)
  computerSelection = arr[choice].toLowerCase()
  return computerSelection

}

//User Choice
function userChoice() {
  return choice
}

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
    console.log(`You Lose! ${bot} beats ${player}`)
    botScore += 1;
  }

  else {
    console.log(`You won! ${player} beats ${bot}`)
    playerScore += 1;

  }
}


// New Main Function GAme to play 5 Rounds!


function game(us, pc) {
  playRound(us, pc)
}

game(prompt("Rock, Paper, Scissor?").toLowerCase(), getComputerChoice())
game(prompt("Rock, Paper, Scissor?").toLowerCase(), getComputerChoice())
game(prompt("Rock, Paper, Scissor?").toLowerCase(), getComputerChoice())
game(prompt("Rock, Paper, Scissor?").toLowerCase(), getComputerChoice())
game(prompt("Rock, Paper, Scissor?").toLowerCase(), getComputerChoice())


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