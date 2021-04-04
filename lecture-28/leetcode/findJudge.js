// https://leetcode.com/problems/find-the-town-judge/

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(N, trust) {
    
    let board = [];
    
    for(let i=0; i<N; i++){
        let row = new Array(N);
        row.fill(0);
        board.push(row);
    }
    
    
    for([r, c] of trust){
        board[r-1][c-1] += 1;
    }
    
    for(let col=0; col<N; col++){
        let sum = 0;
        let reverse = 0;
        
        for(let row=0; row<N; row++){
            sum+=board[row][col];
            reverse += board[col][row];
        }
        
        if(sum == N-1 && reverse == 0){
            return col + 1;
        }
    }
    
    return -1;
};