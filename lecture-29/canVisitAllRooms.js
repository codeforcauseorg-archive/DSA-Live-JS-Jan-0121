// https://leetcode.com/problems/keys-and-rooms/submissions/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
    
    let set = new Set();
    let stack = [];
    
    stack.push(0);
    set.add(0);
    
    while(stack.length > 0){
        let top = stack.pop();
        for(let key of rooms[top]){
            if(!set.has(key)){
                set.add(key);
                stack.push(key);
            }
        }
    }
    
    return set.size == rooms.length;
    
}