let n = 6;

let rowmirr = 0;
let row = 0;
while(rowmirr < 2 * n - 1){
    let colmirr = 0;
    let col = 0;
    while(colmirr < 2 * n - 1){
        if(col < n - row){
            process.stdout.write("* ");
        } else {
            process.stdout.write("  ");
        }
        if(colmirr < n-1){
            col += 1;
        } else{
            col -= 1;
        }
        
        colmirr += 1;
    }
    process.stdout.write("\n");

    if(rowmirr < n-1){
        row += 1;
    } else{
        row -= 1;
    }
    
    rowmirr += 1;
}

