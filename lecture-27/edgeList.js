class Graph {

    #edges = []

    
    insertEdge = (source, target) => {
        this.#edges.push([source, target]);
    }

    existsEdge = (source, target) => {
        for(let edge of this.#edges){
            if(edge[0]==source && edge[1]==target){
                return true;
            } 
        }

        return false;
    }

}