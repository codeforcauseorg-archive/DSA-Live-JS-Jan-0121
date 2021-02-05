function decitobin(deci) {
    let bin = 0;
    let place = 1;
    while (deci > 0) {
        let rem = deci % 2;
        bin = bin + rem * place;
        place = place * 10;
        deci = parseInt(deci / 2);
    }
    return bin;
}

// let bin = decitobin(6);
// console.log(bin)

function bintodeci(bin) {
    let deci = 0;
    let place = 1;
    while (bin > 0) {
        let rem = bin % 10;
        deci = deci + rem * place;
        place = place * 2;
        bin = parseInt(bin / 10);
    }
    return deci;
}
// let deci = bintodeci(110);
// console.log(deci)

function anytodeci(any, base) {
    let deci = 0;
    let place = 1;
    while (any > 0) {
        let rem = any % 10;
        deci = deci + rem * place;
        place = place * base;
        any = parseInt(any / 10);
    }
    return deci;
}

function decitoany(deci, base) {
    let any = 0;
    let place = 1;
    while (deci > 0) {
        let rem = deci % base;
        any = any + rem * place;
        place = place * 10;
        deci = parseInt(deci / base);
    }
    return any;
}

// convert octal 8 to bin 8

let deci = anytodeci(10, 8);
let bin = decitoany(deci, 2);

console.log(bin)