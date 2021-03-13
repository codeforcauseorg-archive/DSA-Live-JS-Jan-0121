const line = "Welcome to Code for Cause";

const freq  = new Map();

for (const letter of line) {
    if(freq.has(letter)){
        freq.set(letter, freq.get(letter) + 1);
    } else {
        freq.set(letter, 1);
    }
}

console.log(freq);