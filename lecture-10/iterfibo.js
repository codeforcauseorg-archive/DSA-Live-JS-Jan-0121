function fibo(value){

    let first = 0;
    let second = 1;

    for (let index = 1; index <= value; index++) {
        let temp = first + second;
        first = second;
        second = temp;
    }

    return first;
}



