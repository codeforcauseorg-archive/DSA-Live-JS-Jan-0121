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
            tVertex.neighbours.push(sVertex);
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

    display = ()=>{
        for(let [value, vertex] of this.#vertices){
            process.stdout.write(value + " => ");
            for (const neighbour of vertex.neighbours) {
                process.stdout.write(neighbour.value + ", ");
            }
            process.stdout.write("\n");
        }
    }

    dft = (start)=>{
        let initial = this.#vertices.get(start);
        let stack = [];
        let processed = new Set();

        stack.push(initial);
        processed.add(initial);

        while(stack.length > 0){
            let top = stack.pop();
            console.log(top.value);

            for(let neighbour of top.neighbours){
                if(!processed.has(neighbour)){
                    processed.add(neighbour);
                    stack.push(neighbour);
                }
            }
        }

    }


    dfs = (start, target)=>{
        let initial = this.#vertices.get(start);
        let stack = [];
        let processed = new Set();

        stack.push(initial);
        processed.add(initial);

        while(stack.length > 0){
            let top = stack.pop();
            
            if(top.value == target){
                return true;
            }

            for(let neighbour of top.neighbours){
                if(!processed.has(neighbour)){
                    processed.add(neighbour);
                    stack.push(neighbour);
                }
            }
        }

        return false;

    }
}



let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "C");
graph.addEdge("D", "B");
graph.addEdge("E", "B");

console.log(graph.dfs("D", "E"));