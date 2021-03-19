// https://leetcode.com/problems/longest-palindromic-subsequence/

var longestPalindromeSubseq = function(word, start, end) {
    
    if ((end-start) < 1){
        return (end-start) + 1;
    }

    if(word[start] == word[end]){
        return 2 + longestPalindromeSubseq(word, start+1, end-1);
    }

    let case1 = longestPalindromeSubseq(word, start+1, end);
    let case2 = longestPalindromeSubseq(word, start, end-1);

    return Math.max(case1, case2);

};

var longestPalindromeSubseqDP = function(word, start, end, memory) {
    
    if ((end-start) < 1){
        return (end-start) + 1;
    }

    if(memory[start][end] != undefined){
        return memory[start][end];
    }

    let out;

    if(word[start] == word[end]){
        out = 2 + longestPalindromeSubseqDP(word, start+1, end-1, memory);
    } else{
        let case1 = longestPalindromeSubseqDP(word, start+1, end, memory);
        let case2 = longestPalindromeSubseqDP(word, start, end-1, memory);
    
        out =  Math.max(case1, case2);
    }

    memory[start][end] = out;

    return out;

};


let memory = [];
let word = "cbbd";

for (let row = 0; row < word.length; row++) {
    memory.push(new Array(word.length));
}


console.log(longestPalindromeSubseqDP(word, 0, word.length - 1, memory));