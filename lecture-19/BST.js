class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;

    this.height = 1;
  }
}

class BST {
  #root = null;

  insert = (value) => {
    this.#root = this.#insert(value, this.#root);
  };

  #insert = (value, node) => {
    if (node == null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.#insert(value, node.left);
    } else if (value > node.value) {
      node.right = this.#insert(value, node.right);
    }

    node.height = Math.max(this.#height(node.left), this.#height(node.right)) + 1;

    return this.#avlBalance(node) 
  };

  #height = (node) => {
    return node == null ? 0 : node.height;
  };

  height = () => {
    return this.#height(this.#root);
  };

  balanced = () => {
    return this.#balanced(this.#root);
  };

  #balanced = (node) => {
    if (node == null) {
      return true;
    }

    let current =
      Math.abs(this.#height(node.left) - this.#height(node.right)) <= 1;

    return current && this.#balanced(node.left) && this.#balanced(node.right);
  };

  #leftRotate = (y) => {
    let x = y.right;
    let t2 = x.left;

    x.left = y;
    y.right = t2;

    y.height = Math.max(this.#height(y.left), this.#height(y.right)) + 1;
    x.height = Math.max(this.#height(x.left), this.#height(x.right)) + 1;

    return x;
  };

  #rightRotate = (x) => {
    let y = x.left;
    let t2 = y.right;

    y.right = x;
    x.left = t2;

    x.height = Math.max(this.#height(x.left), this.#height(x.right)) + 1;
    y.height = Math.max(this.#height(y.left), this.#height(y.right)) + 1;

    return y;
  };

  #avlBalance = (node) => {
      
    if (this.#height(node.left) - this.#height(node.right) > 1) {
        if(this.#height(node.left.left) - this.#height(node.left.right) < 0){
            node.left = this.#leftRotate(node.left);
        }
        node = this.#rightRotate(node);
    } else if (this.#height(node.left) - this.#height(node.right) < -1) {
        if(this.#height(node.right.left) - this.#height(node.right.right) > 0){
            node.right = this.#rightRotate(node.right);
        }
        node = this.#leftRotate(node);
    }

    return node;
  }

  
}

let bst = new BST();

for (let index = 0; index < 1000000; index++) {
  // const element = parseInt(Math.random() * 10000)
  bst.insert(index);
}

console.log(bst.balanced(), bst.height());
