var fs = require('fs');

fs.rename('mynewfile2.txt', 'myrenamedFile.txt', function(err){
    if (err) throw err;
    console.log('File Renamed!');
});