document.addEventListener('DOMContentLoaded', () => {
    console.log("JS Loaded")

    const buttons = document.querySelectorAll('.choice')
    for(let button of buttons){
        button.addEventListener('click', handleChoice)
    }
})


const handleChoice = function(event){
    const playerChoice = event.target.value
    const computerChoice = getRandomChoice()
    const winner = play(playerChoice, computerChoice)
    showWinner(playerChoice, computerChoice, winner)
    addScore(winner)
}


const getRandomChoice = function(){
    const choices = ["Grass","Ground","Ice"]
    const choice = choices[Math.floor(Math.random()*choices.length )]
    return choice 
}

const addScore = function(winner){
    if(winner ==="You win!"){
        const playerScore = document.querySelector
        ('#p-score')
        playerScore.innerHTML++
}   else if(winner ==="You lose..."){
    const computerScore = document.querySelector
    ('#c-score')
computerScore.innerHTML++
}
}

const showWinner = function(player, computer, winner){
 const resultDiv = document.querySelector('#winner')
 resultDiv.innerHTML = ''
 const choiceElement = document.createElement('p')
 choiceElement.textContent = ("You chose ") +player+ ". Computer chose "+computer+"."
 resultDiv.appendChild(choiceElement)

 const winnerElement = document.createElement('h2')
 winnerElement.textContent = winner
 if(winner === "You win!"){
winnerElement.classList.add('win')
 }else if(winner ==="You lose...")

 resultDiv.appendChild(winnerElement)
}

const play = function(player, computer){

    if( player ==="Ground" && computer === "Grass"){
    return "You win!"

}
if (player === "Ice" && computer === "Grass"){
return "You lost"
}
}

