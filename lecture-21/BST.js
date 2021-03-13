class Node {
    
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.count = 1;
    }


}

class BST {

    #root = null;

    insert = function(value){
        this.#root = this.#insert(value, this.#root);
    }

    #insert = function(value, node){
        
        if(node == null){
            return new Node(value);
        }

        if(value > node.value ){
            node.right = this.#insert(value, node.right);
        } else if(value < node.value){
            node.left = this.#insert(value, node.left);
        } else {
            node.count += 1;
        }

        return node;
    }

    delete = (value) => {
        this.#root = this.#delete(value, this.#root);
    }

    #delete = (value, node)=> {
        if(node == null){
            return null;
        }

        if(value < node.value){
            node.left = this.#delete(value, node.left);
        } else if (value > node.value){
            node.right = this.#delete(value, node.right);
        } else {
            if(node.count > 1){
                node.count -= 1;
            } else {
                if(node.left == null){
                    return node.right;
                } else if (node.right == null){
                    return node.left;
                } else {
                    let nextVal = this.#findNext(node);
                    node.value = nextVal;
                    node.right = this.#delete(nextVal, node.right);
                }
            }
        }

    }

    // we surely have a right child
    #findNext = (node) => {
        let temp = node.right;

        while(temp.left){
            temp = temp.left;
        }

        return temp.value;

    }

}

const tree = new BST()

tree.insert(10);
tree.insert(15);
tree.insert(20);
tree.insert(14);
tree.insert(4);
tree.insert(3);


let output = tree.sorted();

console.log(output);