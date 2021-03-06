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
      distances.set(name, 0);
    }

    distances.set(start, 1);

    while(distances.size > 0){

      let max;
      for(let [name, distance] of distances){
        if(max == undefined){
          max = name;
        } else if (distance > distances.get(max)){
          max = name;
        }
      }

      // update weights of neighbours
      let current = this.#vertices.get(max);
      for(let [padosi, weight] of current.neighbours){
        let padosiName = padosi.value;
        if(distances.has(padosiName) && (distances.get(padosiName) < (distances.get(max) * weight))){
          distances.set(padosiName, (distances.get(max) * weight));
          parents.set(padosiName, max);
        }
      }

      finals.set(max, distances.get(max));
      distances.delete(max);
    }

    return finals;
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

let n = 3;
let edges = [[0,1],[1,2],[0,2]];
let succProb = [0.5,0.5,0.2];

for(let i =0; i<n; i++){
  graph.addVertex(i);
}

for(let index=0; index< edges.length; index++){
  let [start, end] = edges[index];
  let prob = succProb[index];
  graph.addEdge(start, end, prob)
}

let distances = graph.dijkstra(0);
console.log(distances.get(2));

