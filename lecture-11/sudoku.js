let board = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];

function sudokuSolver(board, row=0, col=0){
    if(row == 9){
        for (const row of board) {
            console.log(row.join("  "));
        }
        return;
    }

    if(col == 9){
        sudokuSolver(board, row+1, 0);
        return;
    }

    if (board[row][col] > 0){
        sudokuSolver(board, row, col+1);
    } else {
        for (let value = 1; value <= 9; value++) {
            if(isSafe(board, row, col, value)){
                board[row][col] = value;
                sudokuSolver(board, row, col+1);
                board[row][col] = 0;
            }
        }
    }


}

function isSafe(board, row, col, value){

    for (let c = 0; c < 9; c++) {
        if(board[row][c] == value){
            return false;
        }   
    }

    for (let r = 0; r < 9; r++) {
        if(board[r][col] == value){
            return false;
        }
    }

    let boxR = row - (row%3);
    let boxC = col - (col%3);

    for (let r = boxR; r < boxR+3; r++) {
        for (let c = boxC; c < boxC + 3; c++) {
            if(board[r][c] == value){
                return false;
            }
        } 
    }

    return true;
}


sudokuSolver(board);

