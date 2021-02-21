class CustomQueue {

    #data = []

    insert(value) {
        this.#data.push(value);
    }

    delete() {
        return this.#data.splice(0, 1)[0];
        // let value = this.#data[0];
        // for (let index = 0; index < this.#data.length-1; index++) {
        //     this.#data[index] = this.#data[index+1];
        // }
        // this.#data.pop();
        // return value;
    }

    get front() {
        return this.#data[0];
    }
}

let queue = new CustomQueue();

queue.insert(10);
queue.insert(20);
queue.insert(50);
queue.insert(1);

for (let index = 0; index < 4; index++) {
    console.log(queue.delete());
}
