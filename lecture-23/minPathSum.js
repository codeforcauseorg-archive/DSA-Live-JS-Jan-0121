var minPathSum = function(grid) {
    
};

var minPathSumRec = function(grid, row, col){
    if(row == 0 && col == 0){
        return grid[row][col];
    }

    if(row == 0){
        return grid[row][col] + minPathSumRec(grid, row, col-1);
    }

    if(col == 0){
        return grid[row][col] + minPathSumRec(grid, row-1, col);
    }

    let case1 = minPathSumRec(grid, row-1, col);
    let case2 = minPathSumRec(grid, row, col-1);

    return Math.min(case1, case2) + grid[row][col];
}

var minPathSumDP = function(grid, row, col, memory){
    if(row == 0 && col == 0){
        return grid[row][col];
    }

    if(memory[row][col] != undefined){
        return memory[row][col];
    }

    let out;

    if(row == 0){
        out = grid[row][col] + minPathSumDP(grid, row, col-1, memory);
    } else if(col == 0){
        out = grid[row][col] + minPathSumDP(grid, row-1, col, memory);
    } else {
        let case1 = minPathSumDP(grid, row-1, col, memory);
        let case2 = minPathSumDP(grid, row, col-1, memory);
        out = Math.min(case1, case2) + grid[row][col];
    }

    memory[row][col] = out;
    return out;
}


var minPathSumItr = function(grid, memory){
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if(row == 0 && col == 0){
                memory[row][col] =  grid[row][col];
                continue;
            } 

            let out;

            if(row == 0){
                out = grid[row][col] + memory[row][col-1];
            } else if(col == 0){
                out = grid[row][col] + memory[row-1][col];
            } else {
                let case1 = memory[row-1][col];
                let case2 = memory[row][col-1];
                out = Math.min(case1, case2) + grid[row][col];
            }

            memory[row][col] = out;
        }
    }

    return memory[grid.length-1][grid[0].length-1];
}

let memory = [];

for (let row = 0; row < grid.length; row++) {
    memory.push(new Array(grid[0].length))
}