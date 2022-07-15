// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true
let randomNumber

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const rollBtnLuck = document.getElementById("rollBtnLuck")
const resetBtn = document.getElementById("resetBtn")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
    rollBtnLuck.style.display = "none"
}

/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", rollDice);
 
function rollDice() {
    const randomNumber = (Math.floor(Math.random() * 6) + 1)

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
        changeBackground()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
        changeBackground()
    }
    player1Turn = !player1Turn
    
}
 
resetBtn.addEventListener("click", function(){
    reset()
})

function randomFactor() {
    let random = Math.floor(Math.random()*2)
    if (random >= 1) {
        randomNumber = 2
        return randomNumber
    } else {
        randomNumber = 0
        return randomNumber
    }
}

rollBtnLuck.addEventListener("click", function() {
    if (player1Turn) {
            let random = randomFactor()
            player1Score = player1Score * random
            player1Scoreboard.textContent = player1Score
            
            player1Dice.classList.remove("active")
            player2Dice.classList.add("active")
            message.textContent = "Player 2 Turn"
            player1Dice.textContent = "x" + random
            
                if (player1Score >= 20) {
                    message.textContent = "Player 1 Won 🥳"
                    showResetButton()
                    changeBackground()
                }  else {
                }
            
            player1Turn = !player1Turn
            
    } else {
            let random = randomFactor()
            player2Score = player2Score * random
            player2Scoreboard.textContent = player2Score
            player2Dice.classList.remove("active")
            player1Dice.classList.add("active")
            message.textContent = "Player 1 Turn"
            player2Dice.textContent = "x" + random
            
            if (player2Score >= 20) {
                    message.textContent = "Player 2 Won 🥳"
                    changeBackground()
                    showResetButton()
                }  else {
                }
                
            player1Turn = !player1Turn
        }
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block" 
    rollBtnLuck.style.display = "block"
    document.getElementById("main-window").style.backgroundImage="";

    
    if (player1Turn) {
        message.textContent = "Player 1 Turn"
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
            
    } else {
        message.textContent = "Player 2 Turn"
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")

    }
}

function changeBackground() {
        document.getElementById("main-window").style.backgroundImage="url('images/giphy.gif')";
        document.getElementById("main-window").style.backgroundSize="cover";
}