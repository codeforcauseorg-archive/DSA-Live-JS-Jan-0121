// https://leetcode.com/problems/find-center-of-star-graph/submissions/

/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
    
    let N = edges.length + 1;
    
    let source = new Array(N);
    
    source.fill(0);
    
    for(let [s, t] of edges){
        source[s-1] += 1;
        source[t-1] += 1;

        console.log(source);
    }
    
    for(let index=0; index<N; index++){
        if(source[index] == N-1){
            return index+1;
        }
    }
    
    return 0;
};

