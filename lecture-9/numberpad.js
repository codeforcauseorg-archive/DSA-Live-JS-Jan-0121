function getKeyLetter(key){
    let letters = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    return [...letters[key]];
}

function numpad(unproc, proc=""){
    if(unproc == ""){
        console.log(proc);
        return;
    }

    let key = parseInt(unproc[0]);
    let letters = getKeyLetter(key);

    let mod_unproc = unproc.substring(1);
    
    for (const letter of letters) {
        numpad(mod_unproc, proc + letter);
    }
}

// console.log(getKeyLetter(2));
numpad("24");