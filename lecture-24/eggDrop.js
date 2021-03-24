var superEggDrop = function(eggs, floors) {
    
    if(floors == 0){
        return 0;
    }

    if(eggs == 1){
        return floors;
    }

    let best = floors;

    for (let floor = 1; floor <= floors; floor++) {
        
        let down = superEggDrop(floor-1, eggs-1);
        let up = superEggDrop(floors-floor, eggs);
        
        let worst = 1 + Math.max(up, down);

        if(worst < best){
            best = worst;
        }
    }

    return best;
};


let [eggs, floors] = [2, 6]
let memory = [];

for (let e = 0; e <= eggs; e++) {
    memory.push(new Array(floors + 1));
}

