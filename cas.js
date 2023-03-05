let firstCard = 1
let secondCard = 8 
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackjack = false
let isAlive = true
let message = " "


let messageEL = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function startGame() {
    renderGame()
}

function renderGame() {
    if (sum<=20) {
        message ="Do you want to draw a new card?"

    }else if (sum===21) {
        message ="Bravo! You got the Blackjack"
        hasBlackjack = true
        
    } else {
        message ="Sorry, You are out of the game!"
        isAlive = false
        
    }
    messageEL.textContent = message
    sumEl.textContent = "Sum:" + " " + sum
    cardEl.textContent = "Cards:" 
    for (let i = 0; i = cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

}

function newCard() {
    let card = 8
    sum += card
    cards.push(card)
    renderGame()

}  

cards = [1, 6, 8]
 for (let count = 0; count < cards.length; count++) {
    console.log(cards[count])
 }