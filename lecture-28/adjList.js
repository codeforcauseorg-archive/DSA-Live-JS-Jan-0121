class Vertex {
  constructor(value) {
    this.value = value;
    this.neighbours = [];
  }
}

class Graph {
  #vertices = new Map();

  addEdge = (source, target) => {
    let sVertex = this.getVertex(source);
    let tVertex = this.getVertex(target);

    if (sVertex && tVertex) {
      sVertex.neighbours.push(tVertex);
      tVertex.neighbours.push(sVertex);
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

  display = () => {
    for (let [value, vertex] of this.#vertices) {
      process.stdout.write(value + " => ");
      for (const neighbour of vertex.neighbours) {
        process.stdout.write(neighbour.value + ", ");
      }
      process.stdout.write("\n");
    }
  };

  dft = (start) => {
    let initial = this.#vertices.get(start);
    let stack = [];
    let processed = new Set();

    stack.push(initial);
    processed.add(initial);

    while (stack.length > 0) {
      let top = stack.pop();
      console.log(top.value);

      for (let neighbour of top.neighbours) {
        if (!processed.has(neighbour)) {
          processed.add(neighbour);
          stack.push(neighbour);
        }
      }
    }
  };

  connectedComponents = () => {
    let processed = new Set();
    let components = [];

    for (let [initialKey, initial] of this.#vertices) {
      if (processed.has(initial)) {
        continue;
      }

      let component = [];

      let stack = [];
      stack.push(initial);
      processed.add(initial);

      while (stack.length > 0) {
        let top = stack.pop();
        component.push(top.value);

        for (let neighbour of top.neighbours) {
          if (!processed.has(neighbour)) {
            processed.add(neighbour);
            stack.push(neighbour);
          }
        }
      }

      components.push(component);
    }

    return components;
  };

  bipart = () => {

    let processed = new Set();
    let red = new Set();
    let black = new Set();

    for (let [initialKey, initial] of this.#vertices) {
      if (processed.has(initial)) {
        continue;
      }

      let stack = [];
      stack.push(initial);
      processed.add(initial);
      red.add(initial);

      while (stack.length > 0) {
        let top = stack.pop();

        for (let neighbour of top.neighbours) {
          if (!processed.has(neighbour)) {
            processed.add(neighbour);
            stack.push(neighbour);
            if(red.has(top)){
                black.add(neighbour);
            } else {
                red.add(neighbour);
            }
          } else{
            if(red.has(top) && red.has(neighbour)){
                return false;
            }
            if(black.has(top) && black.has(neighbour)){
                return false;
            }
          }
        }
      }

    }

    return true;
  };

  dfs = (start, target) => {
    let initial = this.#vertices.get(start);
    let stack = [];
    let processed = new Set();

    stack.push(initial);
    processed.add(initial);

    while (stack.length > 0) {
      let top = stack.pop();

      if (top.value == target) {
        return true;
      }

      for (let neighbour of top.neighbours) {
        if (!processed.has(neighbour)) {
          processed.add(neighbour);
          stack.push(neighbour);
        }
      }
    }

    return false;
  };

  findAllPaths = (start, target) => {
    let initial = this.#vertices.get(start);
    let visied = new Set();
    visied.add(initial);

    return this.#findAllPaths(initial, target, visied, [start]);
  };

  #findAllPaths = (current, target, visited, path = [], solutions = []) => {
    if (current.value == target) {
      solutions.push([...path]);
      return;
    }

    for (let neighbour of current.neighbours) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        path.push(neighbour.value);
        this.#findAllPaths(neighbour, target, visited, path, solutions);
        visited.delete(neighbour);
        path.pop();
      }
    }

    return solutions;
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

console.log(graph.bipart());
