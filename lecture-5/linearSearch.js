let arr = [9, 4, 3, 20, 16, 7, 6];

function checkIfExist(num) {
    return num >= 30;
}
console.log(arr.findIndex(checkIfExist))