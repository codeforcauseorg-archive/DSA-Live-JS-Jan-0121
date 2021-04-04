class Vertex {
    
    constructor(value){
        this.value = value;
        this.neighbours = [];
    }
}


class Graph {

    #vertices = new Map();

    addEdge = (source, target) => {
        let sVertex = this.getVertex(source);
        let tVertex = this.getVertex(target);

        if(sVertex && tVertex){
            sVertex.neighbours.push(tVertex);
        }
    }

    addVertex = (value) => {
        if(!(this.#vertices.has(value))){
            let vertex = new Vertex(value);
            this.#vertices.set(value, vertex);
        }
    }

    getVertex = (value) => {
        if(this.#vertices.has(value)){
            return this.#vertices.get(value);
        } else {
            return null;
        }
    }

    findAllPaths = (start, target)=>{
        let initial = this.#vertices.get(start);
        let visied = new Set();
        visied.add(initial);

        return this.#findAllPaths(initial, target, visied, [start]);
    }

    #findAllPaths = (current, target, visited, path=[], solutions=[])=>{
        if(current.value == target){
            solutions.push([...path]);
            return;
        }

        for(let neighbour of current.neighbours){
            if(!visited.has(neighbour)){
                visited.add(neighbour);
                path.push(neighbour.value);
                this.#findAllPaths(neighbour, target, visited, path, solutions);
                visited.delete(neighbour);
                path.pop();
            }
        }

        return solutions;

    }
}


var allPathsSourceTarget = function(graphGrid) {
    let graph = new Graph();

    for(let i = 0; i < graphGrid.length; i++){
        graph.addVertex(i);
    }

    for(let s = 0; s < graphGrid.length; s++){
        for(let t of graphGrid[s]){
            graph.addEdge(s, t);
        }
    }

    return graph.findAllPaths(0, graphGrid.length-1);
};


let graphGrid = [[1,2],[3],[3],[]];

console.log(allPathsSourceTarget(graphGrid));