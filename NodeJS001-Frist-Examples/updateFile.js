var fs = require('fs');

fs.appendFile('mynewfile2.txt', 'This is my text.', function(err){
    if(err) throw err;
    console.log('Updated!');
});