
let insertion = (array) => {
  for (let pivot = 0; pivot < array.length; pivot++) {
    for (let index = pivot; index > 0; index--) {
      if (array[index - 1] > array[index]) {
        [array[index], array[index - 1]] = [array[index - 1], array[index]];
      } else {
        break;
      }
    }
  }
};

let nums = [7, 9, 1, 70, 65, 40];

insertion(nums);

console.log(nums)

