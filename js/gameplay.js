  //Computer Play function
  function computerSelect() {
    let randomSelect = Math.floor(Math.random()*3) + 1;
    if( randomSelect === 1){
      randomSelect = "rock";
    } else if (randomSelect === 2) {
      randomSelect = "paper";
    } else if (randomSelect === 3) {
      randomSelect = "scissors"
    }
    return randomSelect;
  }


let computer;
let human;

  //Game function
  function playRound(human, computer) {
    human = prompt("Type in either rock, paper or scissors to win the game.")
    human = human.toLowerCase();
    computer = computerSelect();

    let humanWin = "You Won. Computer selected " + computer ;
    let computerWin = "You Lost. Computer selected " + computer;
    let draw = "Its a draw.";

    if (human === computer){
      return draw;
    } else if(human === "rock"){
        if(computer === "scissors") {
          return humanWin;
        } else {
          return computerWin;
        }
    } else if(human === "paper"){
        if(computer === "rock"){
          return humanWin;
        }else {
          return computerWin;
        }
    } else if(human === "scissors"){
        if(computer === "paper"){
          return humanWin;
        } else {
          return computerWin;
        }
    } else{
      return "Please enter Rock, Paper or Scissors. Don't get me angry!"
    }
  }

  function game(repeat){
    let humanWinCount = 0;
    let computerWinCount = 0;
    let drawCount = 0;

    for (let i = 0; i < repeat; i++) {
      let result = playRound(human, computer);
      if (result.indexOf("Won.") !== -1){
        humanWinCount++;
        console.log(result);
        console.log("Player score: " + humanWinCount + " Computer score: " + computerWinCount + " Draws: " + drawCount);
      } else if (result.indexOf("Lost.") !== -1) {
        computerWinCount++;
        console.log(result);
        console.log("Player score: " + humanWinCount + " Computer score: " + computerWinCount + " Draws: " + drawCount);
      } else if(result.indexOf("draw.") !== -1) {
        drawCount++;
        console.log(result);
        console.log("Player score: " + humanWinCount + " Computer score: " + computerWinCount + " Draws: " + drawCount);
        i--;
      } else {
        prompt(result);
        console.log("Player score: " + humanWinCount + " Computer score: " + computerWinCount + " Draws: " + drawCount);
        i--;
      }
    }

    if (humanWinCount > computerWinCount) {
      alert("Your head is blessed. You just beat computer");
    } else{
      alert("Olodo! You allowed a mere computer beat you")
    }
  }

  game(5);
