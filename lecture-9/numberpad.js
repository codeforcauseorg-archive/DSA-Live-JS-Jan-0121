function getKeyLetter(key){
    let letters = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    return [...letters[key]];
}

console.log(getKeyLetter(2));