function lcs(first, second, flen, slen){
    if(flen ==  0 || slen == 0){
        return 0;
    }

    if(first[flen-1] == second[slen-1]){
        return 1 + lcs(first, second, flen-1, slen-1 );
    }

    let case1 = lcs(first, second, flen-1, slen );
    let case2 = lcs(first, second, flen, slen-1 );

    return Math.max(case1, case2);
}

function lcsDP(first, second, flen, slen, memory){
    if(flen ==  0 || slen == 0){
        return 0;
    }

    if(first[flen-1] == second[slen-1]){
        return 1 + lcsDP(first, second, flen-1, slen-1, memory );
    }

    if(memory[flen][slen] != undefined){
        return memory[flen][slen];
    }

    let case1 = lcsDP(first, second, flen-1, slen, memory );
    let case2 = lcsDP(first, second, flen, slen-1, memory );

    let out =  Math.max(case1, case2);
    memory[flen][slen] = out;

    return out;
}

function lcsItr(first, second, memory){
    
    for (let flen = 0; flen <= first.length; flen++) {
        
        for (let slen = 0; slen <= second.length; slen++) {
        
            if(flen ==  0 || slen == 0){
                memory[flen][slen] =  0;
            } else if(first[flen-1] == second[slen-1]){
                memory[flen][slen] =  1 + memory[flen-1][slen-1];
            } else {
                let case1 = memory[flen][slen-1];
                let case2 = memory[flen-1][slen];
                let out =  Math.max(case1, case2);
                memory[flen][slen] = out;
            }
        }

        return memory[first.length][second.length];
        
    }

}




let memory = [];

let first = "aman";
let second = "manan"

for (let row = 0; row <= first.length; row++) {
    memory.push(new Array(second.length + 1));
}

console.log(lcsDP(first, second, first.length, second.length, memory));