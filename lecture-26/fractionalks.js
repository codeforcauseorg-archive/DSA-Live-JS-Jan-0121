let wt = [10, 40, 20, 30];
let val = [60, 40, 100, 120];

function fractional(weights, values, capacity){

    let bundle = [];
    for (let index = 0; index < weights.length; index++) {
        bundle.push([weights[index], values[index]]);
    }

    bundle.sort((left, right) => {
        return (right[1]/right[0]) - (left[1]/left[0]);
    });

    let total = 0;

    let idx = 0;
    while(capacity > 0 && idx < bundle.length){
        let [weight, value] = bundle[idx];
        if(capacity >= weight){
            total += value;
            capacity -= weight;
        } else {
            total += (capacity * (value/weight));
            capacity = 0;
        }
        idx += 1;
    }

    return total;
}

let out = fractional(wt, val, 50);

console.log(out);