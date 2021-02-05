let n = 6;

let rowmirr = 0
let row = 0;
while(rowmirr < 2 * n - 1){
    let col = 0;
    while(col <= row){
        process.stdout.write("* ");
        col += 1;
    }
    process.stdout.write("\n");

    if(rowmirr < n-1){
        row += 1;
    }else{
        row -=1;
    }
    

    rowmirr += 1;
}

