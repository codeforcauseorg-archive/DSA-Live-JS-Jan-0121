var stoneGame = function(piles) {
    let memory = new Map();
    return stoneGameRec(piles, 0, piles.length-1, 1, 0, memory) > 0;
};

var stoneGameRec = function(piles, start, end, chance, total, memory) {

    if(start > end){
        return total;
    }

    let position = [start, end, chance].join(",");
    if(memory.has(position)){
        return memory.get(position);
    }

    let result;

    let left = stoneGameRec(piles, start+1, end, -chance, total+(chance*piles[start]), memory);
    let right = stoneGameRec(piles, start, end-1, -chance, total+(chance*piles[end]), memory);

    if(chance == 1){
        result = Math.max(left, right);
    } else {
        result = Math.min(left, right);
    }

    memory.set(position, result);

    return result;
    
};