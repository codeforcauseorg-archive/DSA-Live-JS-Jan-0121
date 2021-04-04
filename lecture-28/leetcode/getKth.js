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
            return true;
        } else {
            return false;
        }
    }

    getVertex = (value) => {
        if(this.#vertices.has(value)){
            return this.#vertices.get(value);
        } else {
            return null;
        }
    }
}


let graph = new Graph();

let current = 10;

while(current != 1){
    let gen;

    if(current % 2 == 0){
        gen = current/2;
    } else {
        
    }
}

