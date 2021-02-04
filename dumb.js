let n = 5;

let row = 0;
while(row < n){
    let col = 0;
    while(col < 3 * n - 1){
        if(((row + col) < n - 1) || ((col > 2 * n - 1) && (row < (n/2) - 1)) ){
            process.stdout.write("  ");
        }else{
            process.stdout.write("* ");
        }
        
        col += 1;
    }
    
    process.stdout.write("\n");

    row += 1;
}

