function bubble(nums){
    for (let step_count = 0; step_count < nums.length; step_count++) {
        for (let index = 0; index < nums.length - 1 - step_count; index++) {
            if(nums[index] > nums[index+1]){
                [nums[index], nums[index+1]] = [nums[index+1], nums[index]]
            }
        }
    }
}

let nums = [7, 9, 1, 70, 65, 40];

bubble(nums);

console.log(nums);