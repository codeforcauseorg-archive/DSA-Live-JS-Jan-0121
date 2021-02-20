class Car {
    constructor() {
        this.engine = new Engine();
    }

    start = function(){
        console.log("Start the Car");
        this.engine.start();
    }

    stop = function(){
        this.engine.stop();
        console.log("Stop the Car");
    }

    upgrade = function(){
        this.engine = new NitroEngine();
    }
}

class Engine {

    start = function(){
        console.log("Start the engine");
    }

    stop = function(){
        console.log("Stop the engine");
    }
}

class NitroEngine extends Engine {

    start = function(){
        console.log("Start like Nitro engine");
    }

    stop = function(){
        console.log("Stop like Nitro engine");
    }
}

const myCar = new Car();

myCar.start();
myCar.stop();

myCar.upgrade();

myCar.start();
myCar.stop();