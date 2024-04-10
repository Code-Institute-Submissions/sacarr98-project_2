// selectors

var slotRow = document.getElementsByTagName("tr");
var slotCell = document.getElementsByTagName("td");
var tableSlot = document.querySelector(".game-slot");
const playersTurn = document.querySelector(".players-turn");
const resetButton = document.querySelector(".reset-game");

for(let i = 0; i< slotCell.length; i++) {
    slotCell[i].addEventListener('click', (e) => {
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
    })
}

while(!player1){
    var player1 = promt('Player One (red counter): Enter your name');
}

player1Colour = 'red';

while(!player2){
    var player2 = promt('Player Two (yellow counter): Enter your name');
}

player2Colour = 'yellow';