function power(x, y){

    if(y == 0){
        return 1;
    }


    let subpart = power(x, y-1);
    let result = x * subpart;
    return result;
}

let out = power(2, 10);

console.log(out);