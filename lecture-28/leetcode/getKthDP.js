
var getKth = function(lo, hi, k) {

    let memory = new Map();

    let out = [];

    for(let index=lo; index<=hi; index++){
        out.push([index, getKthDP(index, memory)]);
    }

    out.sort((f, s)=> {
        if(f[1] != s[1]){
            return f[1] - s[1];
        } else {
            return f[0] - s[0];
        }
    });

    return out[k-1];

};

var getKthDP = function(current, memory){
    if(current == 1){
        return 0;
    }

    if(memory.has(current)){
        return memory.get(current);
    }

    let output = 0;

    if(current%2 == 0){
        output = 1 + getKthDP(current/2, memory);
    } else {
        output = 1 + getKthDP(current*3+1, memory);
    }

    memory.set(current, output);
    return output;
}

getKth(12, 15);

