"strict mode";

const selection = ["rock", "paper", "scissors"];
const getComputerChoice = () =>
  selection[Math.floor(Math.random() * selection.length)];

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection) {
    return `Draw! Both selected ${computerSelection}.`;
  } else if (playerSelection.toLowerCase() === "paper") {
    console.log("You selected paper");
    switch (computerSelection) {
      case "rock":
        console.log("Computer selected rock");
        return `You win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;
      case "scissors":
        console.log("Computer selected scissors");
        return `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
    }
  } else if (playerSelection.toLowerCase() === "scissors") {
    console.log("You selected scissors");
    switch (computerSelection) {
      case "rock":
        console.log("Computer selected rock");
        return `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
      case "paper":
        console.log("Computer selected paper");
        return `You win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;
    }
  } else if (playerSelection.toLowerCase() === "rock") {
    console.log("You selected rock");
    switch (computerSelection) {
      case "paper":
        console.log("Computer selected paper");
        return `You win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;
      case "scissors":
        console.log("Computer selected scissors");
        return `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
    }
  }
};

function game() {
  let playerPoints = 0;
  let computerPoints = 0;
  let singleGame;
  let finalAnnouncement;
  const rounds = Number(prompt("Write the rounds you want to play:"));
  for (let i = 0; i < rounds; i++) {
    const playerSelection = String(prompt("Select rock paper or scissors:"));
    const computerSelection = getComputerChoice();
    console.log(`Round ${i + 1}`);
    singleGame = playRound(playerSelection, computerSelection);
    if (singleGame.includes("win")) {
      playerPoints++;
    } else if (singleGame.includes("lose")) {
      computerPoints++;
    }
    console.log(singleGame, "\n-----------");
  }
  if (playerPoints === computerPoints) {
    finalAnnouncement = "It's a tie!";
  } else if (playerPoints > computerPoints) {
    finalAnnouncement = "You win the game!";
  } else if (computerPoints > playerPoints) {
    finalAnnouncement = "Computer win the game!";
  }
  console.log(
    finalAnnouncement,
    `\nPlayer points: ${playerPoints} \nComputer points: ${computerPoints}`
  );
}

game();
