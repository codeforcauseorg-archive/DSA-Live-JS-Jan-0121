function freq(line){

    const freqArr = new Array(26);
    freqArr.fill(0);

    for (const val of line) {
        let index = val.charCodeAt(0) - 'a'.charCodeAt(0);
        freqArr[index]+=1;
    }

    return freqArr;

}

function lexopermute(word){
    let freqArr = freq(word);
    // console.log(freqArr);
    lexoRec(word.length, freqArr);
}

function lexoRec(len, freqs, proc=[], index=0){
    if(index == len){
        console.log(proc.join(""));
        return;
    }

    for (let ind = 0; ind < 26; ind++) {
        if(freqs[ind] > 0){
            freqs[ind] -= 1;
            proc.push(String.fromCharCode(ind + 'a'.charCodeAt(0)));
            lexoRec(len, freqs, proc, index + 1);
            proc.pop();
            freqs[ind] += 1;
        }
    }
}

lexopermute("abcd");