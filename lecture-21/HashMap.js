class Node {
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
}

class HashMap {

    #data = [];
    #length = 10;
    #size = 0;

    THRESH = 10;

    constructor(){
        for (let index = 0; index < this.#length; index++) {
            this.#data.push([]);
        }
    }

    static hash = (key) => {

        let total = 0;

        for (let ch of key) {
            total += ch.charCodeAt(0);
        }

        return total;
    }

    set = (key, value)=> {

        const idx = HashMap.hash(key) % this.#length;

        let bucket = this.#data[idx];

        for (const node of bucket) {
            if(node.key === key){
                node.value = value;
                return;
            }
        }

        let node = new Node(key, value);
        this.#size += 1;
        bucket.push(node);

        if(this.#size > this.#length * this.THRESH){
            console.log(`We are rehashing ${this.#length}`);
            this.#rehash();
        }
    }

    #rehash = () =>{
        let old = this.#data;
        let oldLen = this.#length;

        this.#data = [];
        this.#length = oldLen*2;
        this.#size = 0;

        for (let index = 0; index < this.#length; index++) {
            this.#data.push([]);
        }

        for (const bucket of old) {
            for (const node of bucket) {
                this.set(node.key,node.value);
            }
        }

    }

    get = (key) => {

        const idx = HashMap.hash(key) % this.#length;

        let bucket = this.#data[idx];

        for (const node of bucket) {
            if(node.key === key){
                return node.value;
            }
        }

        return undefined;
    }

    delete = (key) => {

        const idx = HashMap.hash(key) % this.#length;
        let bucket = this.#data[idx];

        for (let index = 0; index < bucket.length; index++) {
            if(node.key === key){
                bucket.splice(index, index+1);
                this.#size -= 1;
                return true;
            }
        }

        return false;

    }

    has = (key) => {

        const idx = HashMap.hash(key) % this.#length;
        let bucket = this.#data[idx];

        for (const node of bucket) {
            if(node.key === key){
                return true;
            }
        }

        return false;
    }

}

const map = new HashMap();

for (let index = 0; index < 1000000; index++) {
    map.set(`${index}`, index);
}



