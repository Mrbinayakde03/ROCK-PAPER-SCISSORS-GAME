let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompchoice = () =>{
    let options = ["rock","paper","srissors"]
    // rock ,paper, srissors
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game is draw");
    msg.innerText = ("Draw the Game Play again.")
    msg.style.backgroundColor="rgb(44,57,5)";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("You win");
        msg.innerText = (`You win! your ${userChoice} beats ${compChoice}`);
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compScorePara.innerText = compscore;
        console.log("You lose!");
        msg.innerText = (`You lose! ${compChoice} beats your ${userChoice}`)
        msg.style.backgroundColor="red";

    }
}

const playGame = (userChoice) => {
    console.log("User choice =",userChoice);
    // Genarate computer choice
    const compChoice = genCompchoice();
    console.log("computer choice =",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // srissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock, srissors
            userWin = compChoice === "rock" ? true : false;
        }else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});