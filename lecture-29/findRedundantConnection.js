// https://leetcode.com/problems/redundant-connection

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantConnection = function(edges) {
    
    let parents = new Map();
    
    for(let [s, t] of edges){
        if(!union(s, t, parents)){
            return [s, t];
        }
    }
    
    
};

var union = (source, target, parentsMap)=> {
      source = find(source, parentsMap);
      target = find(target, parentsMap);

      if(source != target){
        parentsMap.set(source, target);
        return true;
      } else {
        return false;
      }
}


var find = (node, parentsMap) => {
    while(parentsMap.has(node)){
      node = parentsMap.get(node);
    }

    return node;
}