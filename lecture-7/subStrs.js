'use strict'

function respondSubstrings(word){
    let subs = [];

    for (let start = 0; start < word.length; start++) {
        for (let end = start + 1; end <= word.length; end++) {
            let cut = word.substring(start, end);
            subs.push(cut);
        }
    }

    return subs;
}

let line = "hello"

let result = respondSubstrings(line);

console.log(result);