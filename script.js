let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

 
const drawGame =() => {
    console.log("Game was draw");
    msg.innerText= "Game was Draw. Play again.";
    msg.style.backgroundColor = "yellow";
};

const genCompChoice = () => {
    const options = ["rock","scissor","paper"]
    const randIndx = Math.floor(Math.random()*3);
    return options [randIndx];
};

const showWinner = (userWin , userChoice , CompChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
    console.log("You Win!");
    msg.innerText = `You win! ${userChoice} beats ${CompChoice}`;
    msg.style.backgroundColor = "green";
    
     
    } else {
      console.log("You lose!");
      msg.innerText = `You lose! ${CompChoice} beats ${userChoice}`;
      msg.style.backgroundColor = "red";
      compScore++;
      compScorePara.innerText = compScore;
    }
}

const playgGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const CompChoice = genCompChoice ();
    console.log("comp choice = " , CompChoice);

    if (userChoice === CompChoice){
        drawGame();
    } else {
        let userWin = true ;
        if(userChoice === "rock") {
            //scissor,paper
            userWin = CompChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            // rock , scissors
            userWin = CompChoice === "scissor" ? false : true; 
        } else {
            //paper,rock
            userWin = CompChoice === "paper" ? false : true ;
        }
    
    showWinner (userWin , userChoice , CompChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>    {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice)
        playgGame(userChoice);
    });
});