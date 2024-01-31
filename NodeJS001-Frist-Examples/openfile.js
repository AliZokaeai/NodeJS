var fs = require ('fs');

//create  an empty file named mynefile2.txt:

fs.open('mynewfile2.txt','w', function(err, file){
    if(err) throw err;
    console.log('Saved!');
})