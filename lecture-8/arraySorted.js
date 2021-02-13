function isSorted(nums, index=0){
    if(index >= nums.length - 1){
        return true;
    }

    if(nums[index] > nums[index + 1]){
        return false;
    }

    return isSorted(nums, index+1);

}

let nums = [6, 8, 10, 18, 17];

console.log(isSorted(nums));