function lcs(first, second, flen, slen, memory=[]){
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

console.log(lcs("aman", "manan"));