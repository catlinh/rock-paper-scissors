let humanScore=0, compScore=0;
let humanCount=document.createElement("div"), compCount=document.createElement("div");
compCount.textContent=compScore;
humanCount.textContent=humanScore;
mine.appendChild(humanCount);
yours.appendChild(compCount);
let score=document.querySelector("#btn")
let results= document.createElement("div");
score.appendChild(results);

// let rock = document.querySelector("#rock")
// rock.addEventListener("click",()=>{
//     let compSelection = getComputerChoice();
//     playRound("rock",compSelection);
// });

// let paper = document.querySelector("#paper")
// paper.addEventListener("click",()=>{
//     let compSelection = getComputerChoice();
//     playRound("paper",compSelection);
// });

// let scissors = document.querySelector("#scissors")
// scissors.addEventListener("click",()=>{
//     let compSelection = getComputerChoice();
//     playRound("scissors",compSelection);
// });

const buttons = document.querySelectorAll('input');

buttons.forEach((button) => {
    button.addEventListener("click",()=>{
        playRound(button.value);
        console.log(button.value)
    });
});

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

function playRound(humanChoice){
    let compChoice=getComputerChoice();
if (humanChoice===compChoice){
    results.textContent="It's a tie! You both played " +humanChoice+ "."
}
    if(humanChoice==="rock"){
        if(compChoice==="paper"){
            results.textContent="You lose! Paper beats rock."
            compScore+=1;
        }
        if(compChoice==="scissors"){
            results.textContent=("You win! Rock beats scissors.");
            humanScore+=1;
        }
    }
    if(humanChoice==="paper"){
        if(compChoice==="scissors"){
            results.textContent="You lose! Scissors beats paper."
            compScore+=1;
        }
        if(compChoice==="rock"){
            results.textContent="You win! Paper beats rock."
            humanScore+=1;
        }
    }
    if(humanChoice==="scissors"){
        if(compChoice==="rock"){
            results.textContent="You lose! Rock beats scissors."
            compScore+=1;
        }
        if(compChoice==="paper"){
            results.textContent="You win! Scissors beats paper."
            humanScore+=1;
        }
    }
    if (humanScore===5 || compScore===5){
        if (compScore===5){
            results.textContent="Game over! The computer has won."
        }
        else{
            results.textContent="Game over! You have won."
        }
    }
    compCount.textContent=compScore;
    humanCount.textContent=humanScore;
}

    