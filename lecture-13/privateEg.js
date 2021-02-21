class Human {

    #name = ""
    #coll = []

    constructor(name="Undefined") {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    get coll() {
        return this.#coll;
    }

    getName = function(){
        return this.#name;
    }
}

anuj = new Human("Anuj");

let bang = anuj.coll;

bang.push(10);

console.log(anuj.coll);