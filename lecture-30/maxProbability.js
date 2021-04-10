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

  dijkstra = (start)=>{
    let distances = new Map();
    let parents = new Map();

    let finals = new Map();
    
    for(let [name, vertex] of this.#vertices){
      distances.set(name, +Infinity);
    }

    distances.set(start, 0);

    while(distances.size > 0){

      let min;
      for(let [name, distance] of distances){
        if(min == undefined){
          min = name;
        } else if (distance < distances.get(min)){
          min = name;
        }
      }

      // update weights of neighbours
      let current = this.#vertices.get(min);
      for(let [padosi, weight] of current.neighbours){
        let padosiName = padosi.value;
        if(distances.has(padosiName) && (distances.get(padosiName) > (distances.get(min) + weight))){
          distances.set(padosiName, (distances.get(min) + weight));
          parents.set(padosiName, min);
        }
      }

      finals.set(min, distances.get(min));
      distances.delete(min);
    }

    return [finals, parents];
  }

  findMinPathsfromSource = (source)=>{
    let [finals, parents] = this.dijkstra(source);

    let solutions = [];

    for(let [vname, vertex] of this.#vertices){
      let solution = [];
      while(parents.has(vname)){
          solution.push(vname);
          vname = parents.get(vname);
      }
      solution.push(vname);
      solutions.push(solution);
    }

    return solutions;
  }

}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 5);
graph.addEdge("A", "C", 10);
graph.addEdge("B", "C", 10);
graph.addEdge("B", "E", 7);
graph.addEdge("C", "D", 8);
graph.addEdge("B", "D", 6);
graph.addEdge("E", "D", 5);
graph.addEdge("E", "F", 9);
graph.addEdge("D", "F", 10);

console.log(graph.findMinPathsfromSource("A"));

