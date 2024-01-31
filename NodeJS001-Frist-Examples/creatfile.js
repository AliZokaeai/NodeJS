var fs = require ('fs');
// create a file name mynewfile.txt:

fs.appendFile('munewfile.txt','I love you Nilaroz', function(err){
    if(err) throw err;
    console.log('Saved!');
})