const fs = require('fs');

fs.readFile('mynewfile1.txt', function(err, data) {
    if(err){
        console.log(err);
    } else {
        console.log(new String(data));
    }
})