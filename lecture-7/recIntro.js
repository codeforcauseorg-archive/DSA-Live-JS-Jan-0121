function pd(value){
    if(value == 0){
        return;
    }

    console.log(value);
    pd(value-1);
}

pd(5);