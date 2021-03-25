// https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/

/**
 * @param {number[][]} rectangles
 * @return {number}
 */

 var countGoodRectangles = function(rectangles) {
    let maxLen = 0;
    let count = 0;
    
    for(let [l, w] of rectangles){
        let size = Math.min(l, w);
        if(size > maxLen){
            maxLen = size;
            count = 1;
        } else if (size == maxLen) {
            count += 1;
        }
    }
    
    return count;
};