const playerMove = document.querySelector("#player-move");
const computerMove = document.querySelector("#computer-move");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const resultDisplay = document.querySelector("#result");
const button = document.getElementsByTagName("button");

// const rock = document.getElementById("rock");
// const paper = document.querySelector("paper");
// const scissor = document.querySelector("scissor");

let player;
let pc;
let result;
let playScore = 0;
let pcScore = 0;

const clickHandler = (e) => {
  player = e.target.id;
  playerMove.textContent = player;
  pcMove();
};

const pcMove = () => {
  random = Math.floor(Math.random() * 3);
  if (random == 0) {
    pc = "rock";
  } else if (random == 1) {
    pc = "paper";
  } else {
    pc = "scissor";
  }
  computerMove.textContent = pc;
  getResult(player, pc);
};

const getResult = (player, pc) => {
  switch (`${player}${pc}`) {
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
      result = "IT'S A DRAW!";
      break;
    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      result = "YOU LOSE!!";
      break;
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      result = "YOU WIN!!";
      break;
  }
  resultDisplay.textContent = result;
  changeColor();
  updateScore();
};

const changeColor = () => {
  let color;
  if (result == "YOU LOSE!!") {
    color = "#A90A0A";
  } else if (result == "YOU WIN!!") {
    color = "#189C0A";
  } else {
    color = "#fafafa";
  }
  resultDisplay.style.visibility = "visible";
  resultDisplay.style.color = color;
  resultDisplay.style.border = `1px dashed ${color}`;
};

const updateScore = () => {
  if (result == "YOU LOSE!!") {
    pcScore++;
    computerScore.textContent = pcScore;
  } else if (result == "YOU WIN!!") {
    playScore++;
    playerScore.textContent = playScore;
  }
};

let btnArray = Array.from(button);
btnArray.forEach((btn) => {
  btn.addEventListener("click", clickHandler);
});
