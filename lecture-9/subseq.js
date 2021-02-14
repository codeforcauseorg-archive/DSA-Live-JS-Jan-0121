function subseq(unprc, proc=""){
    if(unprc==""){
        return [proc];
    }

    let ch = unprc[0];

    let left = subseq(unprc.substring(1), proc + ch);
    let right = subseq(unprc.substring(1), proc);

    return left.concat(right);

}

function subseqOpti(unprc, proc="", index=0){
    if(unprc.length==index){
        return [proc];
    }

    let ch = unprc[index];

    let left = subseqOpti(unprc, proc + ch, index + 1);
    let right = subseqOpti(unprc, proc, index + 1);

    return left.concat(right);

}

function subseqOptiNoRet(unprc, proc="", index=0){
    if(unprc.length==index){
        console.log(proc);
        return;
    }

    let ch = unprc[index];

    subseqOptiNoRet(unprc, proc + ch, index + 1);
    subseqOptiNoRet(unprc, proc, index + 1);

    return;

}

function subseqSolutions(unprc, solutions, proc=""){
    if(unprc==""){
        solutions.push(proc);
        return;
    }

    let ch = unprc[0];

    subseqSolutions(unprc.substring(1), solutions, proc + ch);
    subseqSolutions(unprc.substring(1), solutions, proc);
}

let results = []
subseqSolutions("abc", results);

console.log(results);