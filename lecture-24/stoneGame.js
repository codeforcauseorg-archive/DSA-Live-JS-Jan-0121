var stoneGame = function(piles) {
    return stoneGameRec(piles, 0, piles.length-1, 1, 0) > 0;
};

var stoneGameRec = function(piles, start, end, chance, total) {

    if(start > end){
        return total;
    }

    let result;

    let left = stoneGameRec(piles, start+1, end, -chance, total+(chance*piles[start]));
    let right = stoneGameRec(piles, start, end-1, -chance, total+(chance*piles[end]));

    if(chance == 1){
        result = Math.max(left, right);
    } else {
        result = Math.min(left, right);
    }

    return result;
    
};