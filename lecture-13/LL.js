class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    #head = null;

    insertFirst(value) {
        const node = new Node(value);
        node.next = this.#head;
        this.#head = node;
    }

    deleteFirst() {
        if(this.#head == null){
            return null;
        }

        const value = this.#head.value;
        this.#head = this.#head.next;
        return value;
    }

    getFirst() {
        return this.#head.value;
    }
}

let ll = new LinkedList();

ll.insertFirst("nikki");
ll.insertFirst("ravi");
ll.insertFirst("mohit");

console.log(ll.deleteFirst());
console.log(ll.deleteFirst());
console.log(ll.deleteFirst());

// class CustomStack {

//     #data = new LinkedList();

//     push(value) {
//         this.#data.insertFirst(value);
//     }

//     pop() {
//         return this.#data.deleteFirst();
//     }

//     get top() {
//         return this.#data.getFirst();
//     }
// }