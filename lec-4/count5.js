function countNum(n) {
    let count = 0;
    while (n > 0) {
        if (n % 10 === 5) {
            count++;
        }
        n = parseInt(n / 10);
    }
    return count;
}
// let cn = countNum(25354565);
// console.log(cn)


function mirrReverse(n) {
    let rev = 0;
    while (n > 0) {
        rev = rev * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return rev;
}
console.log(mirrReverse(2435))