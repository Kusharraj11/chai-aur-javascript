const COLS = 10; 
const ROWS = 20;  

let board = [];   // will be refilled on restart 

// empty board just fill everything with 0
function makeBoard() {
  board = [];
  for (let r = 0; r < ROWS; r++) {
    const row = [];
    for (let c = 0; c < COLS; c++) {
      row.push(0);
    }
    board.push(row);
  }
}
const PIECES = [
  [[1,1,1,1]],          // I piece

  [[1,1],
   [1,1]],              // O piece

  [[0,1,0],
   [1,1,1]],            // T piece

  [[1,0,0],
   [1,1,1]],            // L piece

  [[0,0,1],
   [1,1,1]],            // J piece

  [[0,1,1],
   [1,1,0]],            // S piece

  [[1,1,0],
   [0,1,1]]             // Z piece
];