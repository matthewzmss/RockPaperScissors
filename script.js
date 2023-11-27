const rockbtn = document.querySelector('#rockbtn')
const paperbtn = document.querySelector('#paperbtn')
const scissorsbtn = document.querySelector('#scissorsbtn')
const output = document.querySelector('#output')
const chosen = document.querySelector('#chosen')
const compChoice = document.querySelector('#compChoice')
const totalScore = document.querySelector('#score')
const result = document.querySelector('#result')

rockbtn.onclick = rockclick;
function rockclick(){
    computerSelection = getComputerChoice()
    const val = playRound("Rock", computerSelection)
    chosen.textContent = "Rock";
    compChoice.textContent = computerSelection;
    output.textContent = val
    totalScore.textContent = playerScore + " - " + compScore

    if (playerScore == 5){
        result.textContent = "You Win!"  
        rockbtn.disabled = true; 
        scissorsbtn.disabled = true; 
        paperbtn.disabled = true;

        rockbtn.classList.add("disabled");
        paperbtn.classList.add("disabled");
        scissorsbtn.classList.add("disabled");
    }
    else if (compScore == 5){
    result.textContent = "You lose!"
    rockbtn.disabled = true;
    scissorsbtn.disabled = true;
    paperbtn.disabled = true; 

    rockbtn.classList.add("disabled");
    paperbtn.classList.add("disabled");
    scissorsbtn.classList.add("disabled");
    }
}

paperbtn.onclick = paperclick;
function paperclick(){
    computerSelection = getComputerChoice()
    const val = playRound("Paper", computerSelection)
    chosen.textContent = "Paper"
    compChoice.textContent = computerSelection;
    output.textContent = val
    totalScore.textContent = playerScore + " - " + compScore

        if (playerScore == 5){
            result.textContent = "You Win!"  
            paperbtn.disabled = true; 
            rockbtn.disabled = true; 
            scissorsbtn.disabled = true; 

            rockbtn.classList.add("disabled");
            paperbtn.classList.add("disabled");
            scissorsbtn.classList.add("disabled");
        }
        else if (compScore == 5){
        result.textContent = "You lose!"
        paperbtn.disabled = true;
        rockbtn.disabled = true; 
        scissorsbtn.disabled = true; 

        rockbtn.classList.add("disabled");
        paperbtn.classList.add("disabled");
        scissorsbtn.classList.add("disabled");
        }
}

scissorsbtn.onclick = sciclick;
function sciclick(){
    computerSelection = getComputerChoice()
    const val = playRound("Scissors", computerSelection)
    chosen.textContent = "Scissors"
    compChoice.textContent = computerSelection;
    output.textContent = val
    totalScore.textContent = playerScore + " - " + compScore

    if (playerScore == 5){
        result.textContent = "You Win!"  
        scissorsbtn.disabled = true; 
        rockbtn.disabled = true; 
        paperbtn.disabled = true;

        rockbtn.classList.add("disabled");
        paperbtn.classList.add("disabled");
        scissorsbtn.classList.add("disabled");
    }
    else if (compScore == 5){
    result.textContent = "You lose!"
    scissorsbtn.disabled = true;
    rockbtn.disabled = true; 
    paperbtn.disabled = true;

    rockbtn.classList.add("disabled");
    paperbtn.classList.add("disabled");
    scissorsbtn.classList.add("disabled");
    }
}


function getComputerChoice(){
let random = Math.floor(Math.random()*3)+1;
if (random == 1){
    return "Rock";
}
else if (random == 2){
    return "Paper";
}
else if(random == 3)
return "Scissors";
}

let playerScore = 0;
let compScore =0;


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Invalid"){
        return "Invalid Statement"
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper"){
        compScore++;
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock"){
        playerScore++;
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        playerScore++;
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        compScore++;
        return "You Lose! Rock beats Scissors";
    }

    else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        playerScore++;
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        compScore++;
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection == "Paper" && computerSelection == "Paper"){
        return "You Tied!";
    }
    else if (playerSelection == "Rock" && computerSelection == "Rock"){
        return "You Tied!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Scissors"){
        return "You Tied!";
    }
}
