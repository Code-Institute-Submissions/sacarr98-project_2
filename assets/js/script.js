// selectors

var slotRow = document.getElementsByTagName("tr");
var slotCell = document.getElementsByTagName("td");
var tableSlot = document.querySelectorAll(".game-slot");
const playersTurn = document.querySelector(".players-turn");
const resetButton = document.querySelector(".reset-game");
const playAgain = document.querySelector(".play-again");
const player1Score = document.querySelector(".player1-score");
const player2Score = document.querySelector(".player2-score");
let  scores = {
    p1score : 0,
    p2score : 0
} 

// Collapsible instructions
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// identify cell coordinates clicked
for(let i = 0; i< slotCell.length; i++) {
    slotCell[i].addEventListener('click', (e) => {
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
    })
}

// prompt users to enter their player name
while(!player1){
    var player1 = prompt('Player One (red counter): Enter your name');
}

player1Colour = 'red';

while(!player2){
    var player2 = prompt('Player Two (yellow counter): Enter your name');
}

player2Colour = 'yellow';

var currentPlayer = 1;
playersTurn.textContent = `${player1} make your move`;
player1Score.innerHTML = `${player1}'s score: ${scores.p1score}`;
player2Score.innerHTML = `${player2}'s score: ${scores.p2score}`;

Array.prototype.forEach.call(slotCell, (cell)=>{
    cell.addEventListener('click', colourChange);
    // ensure background colour is white (empty cell)
    cell.style.backgroundColor = 'white';
})

// change colour of cell clicked by player
function colourChange(e){
    let column = e.target.cellIndex;
    let row = [];
    // loop through cells starting at the bottom row (index 5)
    for(let i = 5; i > -1; i--){
        // check cell is currently empty
        if(slotRow[i].children[column].style.backgroundColor == 'white'){
            // add selected cell to row array
            row.push(slotRow[i].children[column]);
            // change colour of cell depending on which player clicked
            if(currentPlayer === 1){
                row[0].style.backgroundColor = player1Colour;
                // check for win
                if(checkHorizontal() || checkVertical() || checkDiagonal1() || checkDiagonal2()){
                    playersTurn.textContent = `${player1} wins!`;
                    playersTurn.style.color = player1Colour;
                    scores.p1score++;
                    player1Score.innerHTML = `${player1}'s score: ${scores.p1score}`;
                    return(alert(`${player1} wins!`));
                }else if(checkForDraw()){
                    playersTurn.textContent = 'You have drawn';
                    return(alert('DRAW'));
                }else{
                    playersTurn.textContent = `${player2} make your move!`;
                    return currentPlayer = 2;
                }
            }else{
                row[0].style.backgroundColor = player2Colour;
                if(checkHorizontal() || checkVertical() || checkDiagonal1() || checkDiagonal2()){
                    playersTurn.textContent = `${player2} wins!`;
                    playersTurn.style.color = player2Colour;
                    scores.p2score++;
                    player2Score.innerHTML = `${player2}'s score: ${scores.p2score}`;
                    return(alert(`${player2} wins!`));
                }else if(checkForDraw()){
                    playersTurn.textContent = 'You have drawn';
                    return(alert('DRAW'));
                }else{
                    playersTurn.textContent = `${player1} make your move!`;
                    return currentPlayer = 1;
                }
            }
        }
    }
}

// check winner
function checkColours(one, two, three, four){
    return(one == two && one == three & one == four & one !== 'white');
}

function checkHorizontal(){
    for(let row = 0; row < slotRow.length; row++){
        for(let col = 0; col < 4; col++){
            if(checkColours(slotRow[row].children[col].style.backgroundColor,
                slotRow[row].children[col+1].style.backgroundColor,
                slotRow[row].children[col+2].style.backgroundColor,
                slotRow[row].children[col+3].style.backgroundColor
            )){
                return true;
            }
        }
    }
}

function checkVertical(){
    for(let col = 0; col < 7; col++){
        for(let row = 0; row < 3; row++){
            if(checkColours(slotRow[row].children[col].style.backgroundColor,
                slotRow[row+1].children[col].style.backgroundColor,
                slotRow[row+2].children[col].style.backgroundColor,
                slotRow[row+3].children[col].style.backgroundColor
            )){
                return true;
            }
        }
    }
}

function checkDiagonal1(){
    for(let col = 0; col < 4; col++){
        for(let row = 0; row < 3; row++){
            if(checkColours(slotRow[row].children[col].style.backgroundColor,
                slotRow[row+1].children[col+1].style.backgroundColor,
                slotRow[row+2].children[col+2].style.backgroundColor,
                slotRow[row+3].children[col+3].style.backgroundColor
            )){
                return true;
            }
        }
    }
}

function checkDiagonal2(){
    for(let col = 0; col < 4; col++){
        for(let row = 5; row > 2; row--){
            if(checkColours(slotRow[row].children[col].style.backgroundColor,
                slotRow[row-1].children[col+1].style.backgroundColor,
                slotRow[row-2].children[col+2].style.backgroundColor,
                slotRow[row-3].children[col+3].style.backgroundColor
            )){
                return true;
            }
        }
    }
}

// check if all cells are not white, if so players have drawn
function checkForDraw(){
    let full = [];
    for(let i = 0; i < slotCell.length; i++){
        if(slotCell[i].style.backgroundColor !== 'white'){
            full.push(slotCell[i]);
        }
    }
    if(full.length == slotCell.length){
        return true;
    }
}

// reset game
resetButton.addEventListener('click', () => {
    tableSlot.forEach(slot => {
        slot.style.backgroundColor = 'white';
    });
    playersTurn.style.color = 'black';
    scores = {
        p1score : 0,
        p2score : 0
    } 
    return (currentPlayer == 1 ? playersTurn.textContent = `${player1} make your move` : playersTurn.textContent = `${player2} make your move`);
});

// play again
playAgain.addEventListener('click', () => {
    tableSlot.forEach(slot => {
        slot.style.backgroundColor = 'white';
    });
    playersTurn.style.color = 'black';
    currentPlayer == 1 ? playersTurn.textContent = `${player1} make your move` : playersTurn.textContent = `${player2} make your move`;
    scores = {
        p1score : p1score,
        p2score : p2score
    } 
});