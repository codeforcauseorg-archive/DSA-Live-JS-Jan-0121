function maxInRange(nums, start, end){
    let maxIndex = start;

    for (let index = start; index <= end; index++) {
        if(nums[index] > nums[maxIndex]){
            maxIndex = index;
        }
    }
    return maxIndex;
}

function selection(nums){
    for (let step_count = 0; step_count < nums.length; step_count++) {
        let maxIndex = maxInRange(nums, 0, nums.length-1-step_count);
        [nums[maxIndex], nums[nums.length-1-step_count]] = [nums[nums.length-1-step_count], nums[maxIndex]]
    }
}

let nums = [7, 9, 1, 70, 65, 40];


selection(nums);
console.log(nums.join(" "));