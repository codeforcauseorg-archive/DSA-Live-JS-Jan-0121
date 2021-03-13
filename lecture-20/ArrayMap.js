class Node {
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
}

class ArrayMap {
    #data = [];

    set = (key, value)=> {

        for (const node of this.#data) {
            if(node.key === key){
                node.value = value;
                return;
            }
        }

        let node = new Node(key, value);
        this.#data.push(node);
    }

    get = (key) => {
        for (const node of this.#data) {
            if(node.key === key){
                return node.value;
            }
        }

        return undefined;
    }

    has = (key) => {
        for (const node of this.#data) {
            if(node.key === key){
                return true;
            }
        }

        return false;
    }

    toString() {
        let arr = this.#data.map(item => `${item.key} => ${item.value}`);

        return "{" + arr.join(", ") + "}";
    }


}

const fruits = new ArrayMap();

fruits.set("Apple", "A sweet red fruit");
fruits.set("Mango", "King of fruits");
fruits.set("Grapes", "Angoor khatte hai");

console.log(fruits.get("Apple"));
console.log(fruits.get("Appl"));

console.log(String(fruits));
