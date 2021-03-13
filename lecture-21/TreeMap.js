class Node {
  constructor(key, value, left = null, right = null) {
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
    this.height = 1;
  }
}

class BST {
  #root = null;

  set = (key, value) => {
    this.#root = this.#insert(key, value, this.#root);
  };

  #insert = (key, value, node) => {
    if (node == null) {
      return new Node(key, value);
    }

    if (key < node.key) {
      node.left = this.#insert(key, value, node.left);
    } else if (key > node.key) {
      node.right = this.#insert(key, value, node.right);
    } else {
      node.value = value;
    }

    node.height =
      Math.max(this.#height(node.left), this.#height(node.right)) + 1;

    return this.#avlBalance(node);
  };

  delete = (key) => {
    this.#root = this.#delete(key, this.#root);
  };

  #delete = (key, node) => {
    if (node == null) {
      return null;
    }

    if (key < node.key) {
      node.left = this.#delete(key, node.left);
    } else if (key > node.key) {
      node.right = this.#delete(key, node.right);
    } else {
      if (node.left == null) {
        node = node.right;
      } else if (node.right == null) {
        node = node.left;
      } else {
        [node.key, node.value] = this.#findNext(node);
        node.right = this.#delete(node.key, node.right);
      }
    }

    node.height =
      Math.max(this.#height(node.left), this.#height(node.right)) + 1;

    return this.#avlBalance(node);
  };

  get = (key) => {
    return this.#get(key, this.#root);
  }

  #get = (key, node) => {
      if(node === null){
        return undefined;
      }

      if(key < node.key) {
        return this.#get(key, node.left);
      } else if (key > node.key){
        return this.#get(key, node.right);
      } else {
        return node.value;
      }
  }

  // we surely have a right child
  #findNext = (node) => {
    let temp = node.right;

    while (temp.left) {
      temp = temp.left;
    }

    return [temp.key, temp.value];
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
      if (this.#height(node.left.left) - this.#height(node.left.right) < 0) {
        node.left = this.#leftRotate(node.left);
      }
      node = this.#rightRotate(node);
    } else if (this.#height(node.left) - this.#height(node.right) < -1) {
      if (this.#height(node.right.left) - this.#height(node.right.right) > 0) {
        node.right = this.#rightRotate(node.right);
      }
      node = this.#leftRotate(node);
    }

    return node;
  };
}

let map = new BST();

map.set("apple", "sweet red fruit");
map.set("mango", "king of fruit");

console.log(map.get("apple"));
console.log(map.get("mango"));

map.delete("apple");

console.log(map.get("apple"));
console.log(map.get("mango"));



