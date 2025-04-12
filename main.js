playGame();

function getComputerChoice(cpuAnswer){
let ans= Math.floor(Math.random()*3);
if (ans===0){
    var choice="rock"
} 
if (ans===1){
    var choice="paper"
} 
if (ans===2){
    var choice="scissors"
} 
return choice;
}

function getHumanChoice(humanAnswer){
    let ans= prompt("Rock, paper, scissors, shoot!")
    if (ans.toLowerCase()==="rock"){
        return "rock";
    }
    if (ans.toLowerCase()==="paper"){
        return "paper";
    }
    if (ans.toLowerCase()==="scissors"){
        return "scissors";
    }
}

function playGame(){
    let x=0;
    let humanScore=0;
    let compScore=0;
    function playRound(humanChoice,compChoice){
        if (humanChoice===compChoice){
            console.log("It's a tie! You both played "+ humanChoice+".")
        }
        if(humanChoice==="rock"){
            if(compChoice==="paper"){
                console.log("You lose! Paper beats rock.");
                compScore+=1;
            }
            if(compChoice==="scissors"){
                console.log("You win! Rock beats scissors.");
                humanScore+=1;
            }
        }
        if(humanChoice==="paper"){
            if(compChoice==="scissors"){
                console.log("You lose! Scissors beats paper.")
                compScore+=1;
            }
            if(compChoice==="rock"){
                console.log("You win! Paper beats rock.")
                humanScore+=1;
            }
        }
        if(humanChoice==="scissors"){
            if(compChoice==="rock"){
                console.log("You lose! Rock beats scissors.")
                compScore+=1;
            }
            if(compChoice==="paper"){
                console.log("You win! Scissors beats paper.")
                humanScore+=1;
            }
        }
        }
    while (x<5){
        let compSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        playRound(humanSelection,compSelection);
        x+=1;
    }
    console.log("Game over! You have " +humanScore+" point(s). The computer has " +compScore+ " point(s).")
}
    