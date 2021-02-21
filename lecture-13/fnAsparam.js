function hello(fn){
    fn("Say Hello")
}

hello(console.log);

let fn = console.log;

fn("Hello");