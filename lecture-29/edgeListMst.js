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

let graph = new Graph();

graph.addEdge("A", "B", 10);
graph.addEdge("B", "C", 20);
graph.addEdge("C", "D", 30);
graph.addEdge("D", "A", 40);

console.log(graph.mst());

