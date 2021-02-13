function pd(value){

    if(value == 0){
        return;
    }

    console.log(value);
    pd(value-1);
}

function pi(value){

    if(value == 0){
        return;
    }

    pi(value-1);
    console.log(value);
}

function pdi(value){

    if(value == 0){
        return;
    }

    console.log(value);
    pdi(value-1);
    console.log(value);
}




pdi(5);