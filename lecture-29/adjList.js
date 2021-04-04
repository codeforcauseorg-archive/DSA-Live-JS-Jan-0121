class Vertex {
  constructor(value) {
    this.value = value;
    this.neighbours = new Map();
  }

  addneighbour = (neighbour, weight) => {
    this.neighbours.set(neighbour, weight);
  }
}

class Graph {
  #vertices = new Map();

  addEdge = (source, target, weight=1) => {
    let sVertex = this.getVertex(source);
    let tVertex = this.getVertex(target);

    if (sVertex && tVertex) {
      sVertex.addneighbour(tVertex, weight);
      tVertex.addneighbour(sVertex, weight);
    }
  };

  addVertex = (value) => {
    if (!this.#vertices.has(value)) {
      let vertex = new Vertex(value);
      this.#vertices.set(value, vertex);
    }
  };

  getVertex = (value) => {
    if (this.#vertices.has(value)) {
      return this.#vertices.get(value);
    } else {
      return null;
    }
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
    let edges = [];
    for(let [vertexVal, vertex] of this.#vertices){
      for(let [neigbour, weight] of vertex.neighbours){
          edges.push([vertex, neigbour, weight])
      }
    }

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

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B", 10);
graph.addEdge("B", "C", 20);
graph.addEdge("C", "D", 30);
graph.addEdge("D", "A", 40);

console.log(graph.mst());

