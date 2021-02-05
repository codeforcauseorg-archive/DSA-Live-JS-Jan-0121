function argumnts() {
    console.log(arguments.length)
}
// argumnts([2, 3, 4], "jhgf")

let fun = function (demo = "default parameter given") {
    console.log("in fun " + demo)
}
// fun("lkjhgfghjkh")
// fun()

let arrorFun = demo => console.log("In Arrow function " + demo);
arrorFun("kjhgc")