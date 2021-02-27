function paiseDouble(money){
    return new Promise((resolve, error)=>{
        setTimeout(()=>resolve(money*2), 3000);
    });
}

function res(money){
    console.log(money);
}

let response = paiseDouble(1000);

console.log(response);
setTimeout(()=>console.log(response), 4000);