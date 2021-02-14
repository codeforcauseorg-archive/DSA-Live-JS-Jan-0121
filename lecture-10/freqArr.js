function freq(line){

    const freqArr = new Array(26);
    freqArr.fill(0);

    for (const val of line) {
        let index = val.charCodeAt(0) - 'a'.charCodeAt(0);
        freqArr[index]+=1;
    }

    return freqArr;

}

function countSort(word){
    let freqArr = freq(word);

    const result = [];

    for (let index = 0; index < freqArr.length; index++) {
        
        for (let count = 0; count < freqArr[index]; count++) {
            const val = String.fromCharCode(index + 'a'.charCodeAt(0));
            result.push(val);
        }
        
    }

    return result.join("");
}

console.log(countSort("iamsohappy"));