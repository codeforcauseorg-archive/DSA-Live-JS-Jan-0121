function fibo(value){

    if(value <= 1){
        return value;
    }

    let left = fibo(value - 1);
    let right = fibo(value-2);
    let result = left + right;

    return result;
}

let out = fibo(5);
console.log(out);