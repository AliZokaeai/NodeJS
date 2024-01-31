var fs = require('fs');

fs.unlink('munewfile2.txt', function(err){
    if(err) throw err;
    console.log('File deleted!');
})