function paiseDouble(money){
    return new Promise((resolve, error)=>{
        setTimeout(()=>resolve(money*2), 3000);
    });
};


async function getMoney(money){
    const response =  await paiseDouble(money);
    return "Now you have "+response;
}

// console.log(getMoney(1000));

getMoney(1000).then(out => {
    console.log(out);
})

console.log("Ye pahle chal jayega");
