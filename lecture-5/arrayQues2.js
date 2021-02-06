function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

let arr = [2, 8, 2, 1, 5, 9];
// console.log(max(arr))

function swap(arr, firsti, secondi) {
    // let temp = arr[firsti];
    // arr[firsti] = arr[secondi];
    // arr[secondi] = temp;

    [arr[firsti], arr[secondi]] = [arr[secondi], arr[firsti]]
}
// console.log(Number.MIN_SAFE_INTEGER)
let ar = [2, 3, 4];

// let [a, b, c] = [2, 3, 4]
// console.log(a, b, c)
swap(ar, 1, 2)
console.log(ar)