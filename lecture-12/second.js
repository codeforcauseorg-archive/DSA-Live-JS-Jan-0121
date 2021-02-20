class Human {

    static population = 0;
    static index = 0;
    static data = new Map();

    constructor(name="Unknown") {
        this.name = name;
        this.alive = true;
        this.id = Human.index;
        this.babies = [];
        Human.population += 1;
        Human.data.set(Human.index, this);
        Human.index += 1;
    }

    kill = function(person){
        if(this === person){
            console.log("Suicide is never a solution");
        } else if(this.alive && person.alive){
            person.alive = false;
            Human.population -= 1;
        }
    }

    procreate = function(name){
        const child = new Human(name);
        this.babies.push(child);
        return child;
    }
}

const mohit = new Human("Mohit");
const anuj = new Human("Anuj");

console.log(Human.population);

// anuj.kill(mohit);
// mohit.kill(mohit);

mohit.procreate("Shweta");

console.log(Human.data);

