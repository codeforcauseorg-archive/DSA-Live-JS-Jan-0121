let n = 6;

let row = 0;
while(row < n){
    let col = 0;
    while(col <= row){
        process.stdout.write("* ");
        col += 1;
    }
    process.stdout.write("\n");

    row += 1;
}


row = 0;
while(row < n){
    let col = 0;
    while(col < n-row){
        process.stdout.write("* ");
        col += 1;
    }
    process.stdout.write("\n");

    row += 1;
}