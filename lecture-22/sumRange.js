// https://leetcode.com/problems/range-sum-query-immutable/

var NumArray = function(nums) {

    this.memory = new Array(nums.length);


    for (let i = 0; i < nums.length; i++) {
        if(i == 0){
            this.memory[i] = nums[i];
        } else {
            this.memory[i] = this.memory[i-1] + nums[i];
        }
    }
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left == 0){
        return this.memory[right];
    }

    return this.memory[right] - this.memory[left - 1];
};

let arr = new NumArray([-2, 0, 3, -5, 2, -1]);

console.log(arr.sumRange(0, 5));