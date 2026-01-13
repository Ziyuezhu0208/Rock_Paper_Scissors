function getComputerChoice(){
    let arr = ['rock','paper','scissors']
    return arr[Math.floor(Math.random()*3)]
}
let humanScore = 0
let computerScore =0

const resultDiv = document.querySelector("#result")
const scoreDiv = document.querySelector("#score")
const choiceBtns = document.querySelectorAll(".choice-btn")

choiceBtns.forEach((btn) => {
            btn.addEventListener("click", ()=>{
                if(humanScore < 5 && computerScore<5){ 
                    let humanChoice = btn.id
                    let computerChoice = getComputerChoice()
                    playRound(humanChoice,computerChoice)
                }
        
            })
        })


function playRound(humanChoice,computerChoice){

        let message = ""

        if(humanChoice === computerChoice){
            message =`It's a draw! Both chose ${humanChoice}.`
        }
        else if((humanChoice =='rock' && computerChoice == 'scissors') || (humanChoice == "paper" && computerChoice == "rock") 
        || (humanChoice == "scissors" && computerChoice == "paper")){
            message =`You win! ${humanChoice} beats ${computerChoice}.`
            humanScore +=1

        }
        else{
            message =`You lose! ${computerChoice} beats ${humanChoice}.`
            computerScore+= 1
        }
        resultDiv.textContent = message
        scoreDiv.textContent = `human: ${humanScore}; computer score: ${computerScore}`

        whoWin(humanScore,computerScore)

    }
    

    function whoWin (humanScore, computerScore){
        if (humanScore === 5){
            resultDiv.textContent = `GAME OVER U R THE WINNER`
        }else if(computerScore ===5){
            resultDiv.textContent = "GAME OVER U LOSE"
        }


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
