class Node {
    
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
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
        } 

        return node;

    }

    inorder = function(){
        this.#inorder(this.#root);
    }

    #inorder = function(node){

        if(node == null){
            return;
        }

        this.#inorder(node.left);
        console.log(node.value);
        this.#inorder(node.right);
    }

    preorder = function(){
        this.#preorder(this.#root);
    }

    #preorder = function(node){

        if(node == null){
            return;
        }

        console.log(node.value);
        this.#preorder(node.left);
        this.#preorder(node.right);
    }

    sorted = function(){
        return this.#sorted(this.#root);
    }

    #sorted = function(node, result=[]){

        if(node == null){
            return result;
        }

        this.#sorted(node.left, result);
        result.push(node.value);
        this.#sorted(node.right, result);

        return result;
    }
}

const tree = new BST()

tree.insert(10);
tree.insert(15);
tree.insert(20);
tree.insert(14);
tree.insert(4);
tree.insert(3);


// tree.inorder();

let output = tree.sorted();

console.log(output);