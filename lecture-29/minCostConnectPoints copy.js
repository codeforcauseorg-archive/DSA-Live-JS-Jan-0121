// https://leetcode.com/problems/min-cost-to-connect-all-points

/**
 * @param {number[][]} points
 * @return {number}
 */
 var minCostConnectPoints = function(points) {
    
    let graph = new Graph();


    for(let i=0; i<points.length; i++){
        for(let j=0; j<points.length; j++){
            let [xi, yi] = points[i];
            let [xj, yj] = points[j];
            let weight = Math.abs(xj-xi) + Math.abs(yj-yi);
            graph.addEdge(i, j, weight);
        }
    }
    
    return graph.mst();
    
    
};

class Graph {
  #edges = []

  addEdge = (source, target, weight=1) => {
    this.#edges.push([source, target, weight])
  };

  static union = (source, target, parentsMap)=> {
      source = Graph.find(source, parentsMap);
      target = Graph.find(target, parentsMap);

      if(source != target){
        parentsMap.set(source, target);
        return true;
      } else {
        return false;
      }
  }

  static find = (node, parentsMap) => {
    while(parentsMap.has(node)){
      node = parentsMap.get(node);
    }

    return node;
  }

  mst = ()=>{
    let edges = this.#edges;

    edges.sort((f, s) => f[2] - s[2]);

    let result = 0;
    let parentsMap = new Map();
    
    for(let [source, target, weight] of edges){
      if(Graph.union(source, target, parentsMap)){
        result += weight;
      }
    }

    return result;

  }
}