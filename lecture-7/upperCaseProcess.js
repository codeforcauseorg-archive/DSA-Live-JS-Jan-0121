let word = "Hello"

let output = []

for (let index = 0; index < word.length; index++) {
    const ch = word[index];
    let num = word.charCodeAt(index);

    if(num >= "a".charCodeAt(0) && num <= "z".charCodeAt(0)){
        let diff = num - "a".charCodeAt(0);
        let target = "A".charCodeAt(0) + diff;
        output.push(String.fromCharCode(target));
    } else {
        output.push(ch);
    }
}

console.log(output.join(""));