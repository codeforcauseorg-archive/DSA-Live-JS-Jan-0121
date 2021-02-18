let maze = [];
let n = 4;

for (let index = 0; index < n; index++) {
    let row = new Array(n);
    row.fill(false);
    maze.push(row);
}

let [ratRow, ratCol] = [2, 0];
let [foodRow, foodCol] = [0, 3];

function mazeBT(ratRow, ratCol, foodRow, foodCol, maze, mazeW, mazeH, path=""){

    if(ratRow < 0 || ratRow >= mazeH || ratCol < 0 || ratCol >= mazeW){
        return;
    }

    if(maze[ratRow][ratCol]){
        return;
    }

    if(ratRow == foodRow && ratCol == foodCol){
        return path;
    }

    maze[ratRow][ratCol] = true;
    let up = mazeBT(ratRow-1, ratCol, foodRow, foodCol, maze, mazeW, mazeH, path+"U");
    let down = mazeBT(ratRow+1, ratCol, foodRow, foodCol, maze, mazeW, mazeH, path+"D");
    let left = mazeBT(ratRow, ratCol-1, foodRow, foodCol, maze, mazeW, mazeH, path+"L");
    let right = mazeBT(ratRow, ratCol+1, foodRow, foodCol, maze, mazeW, mazeH, path+"R");
    maze[ratRow][ratCol] = false;

    let current = [up, down, left, right];

    current.sort((left, right) => left.length - right.length);

    return current[0];
}


mazeBT(ratRow, ratCol, foodRow, foodCol, maze, n, n);