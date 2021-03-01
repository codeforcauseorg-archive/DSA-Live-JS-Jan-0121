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
        let node = this.#head;

        for (let jump = 0; jump < index; jump++) {
            node = node.next;
        }

        return node;
    }

    // insert value at index i
    insert(index, value){
        if(index == 0){
            this.insertFirst(value);
            return;
        }

        if(index == this.#size){
            this.insertLast(value);
            return;
        }

        let prev = this.get(index - 1);
        let node = new Node(value);
        node.next = prev.next;
        prev.next = node;

        this.#size += 1;
    }

    display(){
        let node = this.#head;

        while(node){
            process.stdout.write(node.value + " -> ");
            node = node.next;
        }

        process.stdout.write("END\n");
    }

    reverse(){
        let prev = null;
        let present = this.#head;

        this.#tail = this.#head;

        while(present){
            let next = present.next;
            
            present.next = prev;
            prev = present;
            present = next;
        }

        this.#head = prev;
    }

    kReverse(k){

        let head = this.#head;
        let tail = this.#tail;

        let prev = null;
        let present = this.#head;

        for (let step = 0; step < k; step++) {
            let next = present.next;
            present.next = prev;
            prev = present;
            present = next;
        }

        tail = head;
        head = prev;

    }


}

let ll = new LinkedList();

ll.insertFirst("nikki");
ll.insertFirst("ravi");
ll.insertFirst("mohit");

ll.display();

// console.log(ll.front);

// class CustomQueue {

//     #data = new LinkedList();

//     insert(value) {
//         this.#data.insertLast(value);
//     }

//     delete() {
//         return this.#data.deleteFirst();
//     }

//     get front() {
//         return this.#data.front;
//     }
// }

