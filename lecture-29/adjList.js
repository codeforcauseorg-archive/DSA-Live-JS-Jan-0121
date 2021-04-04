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

  addEdge = (source, target, weight) => {
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

}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "C");
graph.addEdge("A", "B");
graph.addEdge("C", "B");
graph.addEdge("D", "E");
graph.addEdge("E", "F");

