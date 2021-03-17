function diceDP(target, faces, memory=[]){
    if(target == 0){
        return 1;
    }

    if(memory[target] != undefined){
        return memory[target];
    }

    let count = 0;

    for (let face = 1; face <= faces; face++) {
        if(target >= face){
            count += diceDP(target - face, faces, memory);
        } 
    }

    memory[target] = count;

    return count;
}

function diceBigDP(target, faces, memory=[]){
    if(target == 0){
        return BigInt("1");
    }

    if(memory[target] != undefined){
        return memory[target];
    }

    let count = BigInt("0");

    for (let face = 1; face <= faces; face++) {
        if(target >= face){
            count += diceBigDP(target - face, faces, memory);
        } 
    }

    memory[target] = count;

    return count;
}

function dice(target, faces){
    if(target == 0){
        return 1;
    }

    let count = 0;

    for (let face = 1; face <= faces; face++) {
        if(target >= face){
            count += dice(target-face, faces);
        } 
    }

    return count;
}


console.log(diceBigDP(1000, 6).toString());
