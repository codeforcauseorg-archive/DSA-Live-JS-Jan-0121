class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    #head = null;
    #tail = null;
    #size = 0;

    insertFirst(value) {
        const node = new Node(value);
        node.next = this.#head;
        this.#head = node;

        if(this.#size == 0){
            this.#tail = this.#head;
        }

        this.#size += 1;
    }

    deleteFirst() {
        if(this.#head == null){
            return null;
        }

        const value = this.#head.value;
        this.#head = this.#head.next;
        if(this.#size == 1){
            this.#tail = this.#head;
        }

        this.#size -= 1;
        return value;
    }


    insertLast(value){
        if(this.#size == 0){
            this.insertFirst(value);
            return;
        } 

        // suraj -> teena -> null
        // now adding vasu
        const node = new Node(value); // create vasu
        this.#tail.next = node; // put vasu next to teena
        this.#tail = node; // now tail is vasu

        this.#size += 1;
    }

    get front() {
        return this.#head.value;
    }

    // get item from index i
    get(index){

    }

    // insert value at index i
    insert(index, value){

    }

    display(){

    }

    reverse(){
        
    }

}

let ll = new LinkedList();

ll.insertFirst("nikki");
ll.insertFirst("ravi");
ll.insertFirst("mohit");

console.log(ll.front);

class CustomQueue {

    #data = new LinkedList();

    insert(value) {
        this.#data.insertLast(value);
    }

    delete() {
        return this.#data.deleteFirst();
    }

    get front() {
        return this.#data.front;
    }
}

