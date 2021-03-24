var coinChangeDP = function(coins, amount, memory) {
    if(amount == 0){
        return 0;
    }

    if(amount < 0){
        return -1;
    }
 
    if(memory.has(amount)){
        return memory.get(amount);
    }

    let min = amount;
    let possible = false;

    for (const coin of coins) {
        let count = coinChangeDP(coins, amount - coin, memory);
        if(count <= min && count >= 0){
            min = count;
            possible = true;
        }
    }

    let out;
    if(possible){
        out =  1 + min;
    } else {
        out =  -1;
    }

    memory.set(amount, out);

    return out;
    

};


var coinChange = function(coins, amount) {
    let memory = new Map();
    return coinChangeDP(coins, amount, memory);
}