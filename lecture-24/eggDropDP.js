var superEggDropDP = function(eggs, floors, memory) {
    
    if(floors == 0){
        return 0;
    }

    if(eggs == 1){
        return floors;
    }

    if(memory[eggs][floors] != undefined){
        return memory[eggs][floors];
    }

    let best = floors;

    for (let floor = 1; floor <= floors; floor++) {
        
        let down = superEggDropDP(eggs-1, floor-1, memory);
        let up = superEggDropDP(eggs, floors-floor, memory);
        
        let worst = 1 + Math.max(up, down);

        if(worst < best){
            best = worst;
        }
    }

    memory[eggs][floors] = best;

    return best;
};


var superEggDrop = function(eggs, floors) {
    let memory = [];
    for (let e = 0; e <= eggs+1; e++) {
        memory.push(new Array(floors + 2));
    }

    return superEggDropDP(eggs, floors, memory);
}


