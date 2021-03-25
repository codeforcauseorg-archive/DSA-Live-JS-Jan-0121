// https://leetcode.com/problems/delete-columns-to-make-sorted/

/**
 * @param {string[]} strs
 * @return {number}
 */
 var minDeletionSize = function(strs) {
    
    let cols = new Set();
    
    for(let idx=1; idx < strs.length; idx++){
        let current = strs[idx];
        let prev = strs[idx-1];
        
        for(let i in current){
            if(current.charCodeAt(i) < prev.charCodeAt(i)){
                cols.add(i);
            } 
        }
    }
    
    return cols.size;
    
};