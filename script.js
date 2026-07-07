function getComputerChoice(pick){
  
    if(pick<1/3){
        let choice="rock";
        return choice;
        
    }
    else if(pick>=1/3 && pick<2/3){
        let choice = "scissors"
        return choice;
    }
    else{
        let choice="paper";
        return choice;
    }
}

function getHumanChoice(){
    let choice= prompt("Enter Rock, Paper or Scissors: ");
    return choice.toLowerCase();

}
let humanScore=0;
let computerScore=0;
function playRound(){
    let human=getHumanChoice();
    let comp=getComputerChoice(Math.random());
    if(human==="rock" && comp==="scissors" || human==="paper" && comp==="rock" || human==="scissors" && comp==="paper"){
        humanScore++;
        console.log(`You WON this round! ${human} beats ${comp}`);

    }
    else if(human===comp){
        console.log(`It is a TIE this round! You both chose ${comp}`);
    }
    else{
        computerScore++;
        console.log(`You LOST this round! ${comp} beats ${human}`);
    }

}
for(let i=1;i<=5;i++){
    playRound();

}
if(humanScore>computerScore){
    console.log("You WON!");
}
else if(humanScore===computerScore){
    console.log("It's a TIE");
}else{
    console.log("You LOSE!");
}

