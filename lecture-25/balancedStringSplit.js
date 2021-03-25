// https://leetcode.com/problems/split-a-string-in-balanced-strings/

/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(word) {
    
    let count = 0;
    let value = 0;
    
    for(const ch of word){
        if(ch == 'L'){
            value -= 1;
        } else {
            value += 1;
        }
        
        if(value == 0){
            count +=1;
        }
    }
    
    return count;
    
    
};