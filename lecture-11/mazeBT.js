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

    // console.log(ratRow, ratCol, foodRow, foodCol, maze, mazeW, mazeH);
    if(ratRow < 0 || ratRow >= mazeH || ratCol < 0 || ratCol >= mazeW){
        return;
    }

    if(maze[ratRow][ratCol]){
        return;
    }

    if(ratRow == foodRow && ratCol == foodCol){
        console.log(path);
        return;
    }


    maze[ratRow][ratCol] = true;
    mazeBT(ratRow-1, ratCol, foodRow, foodCol, maze, mazeW, mazeH, path+"U");
    mazeBT(ratRow+1, ratCol, foodRow, foodCol, maze, mazeW, mazeH, path+"D");
    mazeBT(ratRow, ratCol-1, foodRow, foodCol, maze, mazeW, mazeH, path+"L");
    mazeBT(ratRow, ratCol+1, foodRow, foodCol, maze, mazeW, mazeH, path+"R");
    maze[ratRow][ratCol] = false;
}


mazeBT(ratRow, ratCol, foodRow, foodCol, maze, n, n);