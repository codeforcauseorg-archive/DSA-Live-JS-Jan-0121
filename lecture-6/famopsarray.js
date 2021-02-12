// let arr = ["apple", "mango", "guava"]

// arr.map((value, index, array)=> console.log(value + " " + index + " " + array));



// const nums = [66, 88, 56];
// let out = nums.map(x => x*x);
// console.log(out, nums);


const fruits = ["apple", "pineapple", "guava",];

function filterOdd(num){
    return (num % 2) != 0;
}

// let out = nums.filter(filterOdd);

let out = fruits.filter(item => item.length > 5);
console.log(out);

