let arr = [];

let obj = { name: 'John' }

let bool = true;

let el = 45;

arr.push(el);

arr.push(obj);
arr.push(bool)

el = 67;
obj.name = "Aadhar"
// console.log(el instanceof Object)

// arr.forEach(element => {
//     console.log(element)
// });

// for (const val of arr) {
//     console.log(val)
// }
// for (const val in obj) {
//     console.log(obj[val])
// }
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

