function subseq(unproc, proc=[], index=0){
    if(index == unproc.length){
        console.log(proc.join(""));
        return
    }

    proc.push(unproc[index]);
    subseq(unproc, proc, index+1);
    proc.pop();

    subseq(unproc, proc, index+1);
}

subseq("abc");

