function subseq(unprc, proc=""){
    if(unprc==""){
        return [proc];
    }

    let ch = unprc[0];

    let left = subseq(unprc.substring(1), proc + ch);
    let right = subseq(unprc.substring(1), proc);

    return left.concat(right);

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