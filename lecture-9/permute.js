function insertAppPos(word, ch){

    for (let index = 0; index <= word.length; index++) {
        let left = word.slice(0, index);
        let right = word.slice(index, word.length);
        console.log(left + ch + right);
    }
}

function permute(unprc, proc=""){
    if(unprc==""){
        console.log(proc);
        return;
    }

    let ch = unprc[0];

    for (let index = 0; index <= proc.length; index++) {
        let left = proc.slice(0, index);
        let right = proc.slice(index, proc.length);
        let total = left + ch + right;

        permute(unprc.substring(1), total);
    }


}

permute("abc")

