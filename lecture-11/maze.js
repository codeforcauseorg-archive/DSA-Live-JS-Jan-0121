function maze(row, col){
    if(row == 1 && col == 1){
        return 1;
    }

    let down = 0;
    let right = 0;

    if(row > 1){
        down = maze(row-1, col);
    }
    
    if(col > 1){
        right = maze(row, col-1);
    }

    return down + right;

}

function mazeDiag(row, col){
    if(row == 1 && col == 1){
        return 1;
    }

    let down = 0;
    let right = 0;
    let diag = 0;

    if(row > 1){
        down = mazeDiag(row-1, col);
    }
    
    if(col > 1){
        right = mazeDiag(row, col-1);
    }

    if(row > 1 && col > 1){
        diag = mazeDiag(row - 1 , col-1);
    }

    return down + right + diag;

}

function mazePrint(row, col, solution=""){
    if(row == 1 && col == 1){
        console.log(solution);
        return 1;
    }

    let down = 0;
    let right = 0;

    if(row > 1){
        down = mazePrint(row-1, col, solution + "D");
    }
    
    if(col > 1){
        right = mazePrint(row, col-1, solution + "R");
    }

    return down + right;

}


let sols = mazePrint(3, 3);
console.log(sols);