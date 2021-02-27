var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (response) {
    console.log(response, 'Saved!');
    console.log('Saved!');
});

console.log("Happy");