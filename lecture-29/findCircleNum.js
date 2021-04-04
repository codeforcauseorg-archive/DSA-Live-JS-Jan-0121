// https://leetcode.com/problems/number-of-provinces

class Graph {
  #connections = null;

  constructor(connections){
    this.#connections = connections;
  }

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

  connectedComponents = ()=>{

    let parentsMap = new Map();

    for (let i = 0; i < this.#connections.length; i++) {
      for (let j = 0; j < this.#connections.length; j++) {
        if(this.#connections[i][j] == 1){
          Graph.union(i, j, parentsMap);
        }
      }
    }

    let solution = 0;

    for (let i = 0; i < this.#connections.length; i++) {
      if(!parentsMap.has(i)){
        solution += 1;
      }
    }

    return solution;

  }
}

var findCircleNum = function(isConnected) {

  let graph = new Graph(isConnected);

  return graph.connectedComponents();
    
};