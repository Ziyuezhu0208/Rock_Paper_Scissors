function getComputerChoice(){
    let arr = ['rock','paper','scissors']
    return arr[Math.floor(Math.random()*3)]
}


function getHumanChoice(){
    let humanChoice = window.prompt("Enter the choice")
    return humanChoice
}



function playGame(){
    let humanScore = 0
    let computerScore =0

    function playRound(humanChoice,computerChoice){
        if(humanChoice === computerChoice){
            console.log("It's a draw.")
        }
        else if((humanChoice =='rock' && computerChoice == 'scissors') || (humanChoice == "paper" && computerChoice == "rock") 
        || (humanChoice == "scissors" && computerChoice == "paper")){
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            humanScore +=1

        }
        else{
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
            computerScore+= 1
        }
    

}
    for(let round =1;round <= 5 ; round++){
        const humanChoice = getHumanChoice().toLowerCase();
        const computerChoice = getComputerChoice();

        playRound(humanChoice,computerChoice)
        }
    if(humanScore> computerScore){
        console.log("U WIN")
        }
        else if(humanScore = computerScore){
            console.log("IT IS A TIE")
        }
        else{
        console.log("U LOSER")
        }

}

playGame()