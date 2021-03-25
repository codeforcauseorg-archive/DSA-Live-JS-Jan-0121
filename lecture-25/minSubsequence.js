// https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var minSubsequence = function(nums) {
    
    nums.sort((first, second) => second-first);
    
    let sum = 0;
    for(let item of nums){
        sum += item;
    }
    
    let solution = [];
    let current = 0;
    
    for(let item of nums){
        current += item;
        solution.push(item);
        
        if(current > (sum/2)){
            break;
        }
    }
    
    return solution;
    
};