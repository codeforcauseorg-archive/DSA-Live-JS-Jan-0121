var coinChange = function(coins, amount) {
    if(amount == 0){
        return 0;
    }

    if(amount < 0){
        return -1;
    }
 

    let min = amount;
    let possible = false;

    for (const coin of coins) {
        let count = coinChange(coins, amount - coin);
        if(count <= min && count >= 0){
            min = count;
            possible = true;
        }
    }


    if(possible){
        return 1 + min;
    } else {
        return -1;
    }
    

};