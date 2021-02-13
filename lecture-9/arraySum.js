function arraySum(nums, left = [], right = [], leftSum = 0, rightSum = 0) {
  if (nums.length == 0) {
    if (leftSum == rightSum) {
      console.log(left, right);
    }
    return;
  }

  let item = nums[0];
  let mod_nums = nums.slice(1);

  arraySum(mod_nums, left.concat([item]), right, leftSum + item, rightSum);
  arraySum(mod_nums, left, right.concat([item]), leftSum, rightSum + item);
}

function arraySumWithBT(nums, index = 0, left = [], right = [], leftSum = 0, rightSum = 0) {
    if (nums.length == index) {
      if (leftSum == rightSum) {
        console.log(left, right);
      }
      return;
    }
  
    let item = nums[index];
  
    left.push(item);
    arraySum(nums, left, right, leftSum + item, rightSum);
    left.pop();

    right.push(item);
    arraySum(nums, left, right, leftSum, rightSum + item);
    right.pop();
  }

let nums = [1, 2, 3, 1, 3, 4];

arraySum(nums);
