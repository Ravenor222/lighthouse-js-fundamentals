let whiteQueen = [6,6];
let blackQueen = [3,1];
let whiteX = whiteQueen[0];
let whiteY = whiteQueen[1];
let blackX = blackQueen[0];
let blackY = blackQueen[1];
let board = [];
// Creating the board //
let generateBoard = function() {
    for (let x = 0; x < 8; x++){
        board[x] = [];
        for(let y = 0; y < 8; y++) {
            board[x][y] = 0;
        }
    }
    board[whiteX].splice(whiteY,1,1);
    board[blackX].splice(blackY,1,1);
    return board;
}
// The Queen threat calculator //
let queenThreat = function() {
    if (whiteY === blackY || whiteX === blackX || whiteY - blackY === blackX - whiteX ||
     whiteX - blackX === whiteY - blackY || whiteY + blackY === whiteX + blackX) {
         return true;
     } else {
         return false;
     }
 }
console.log(generateBoard());
console.log(queenThreat(generateBoard()));