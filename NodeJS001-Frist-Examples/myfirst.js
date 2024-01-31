var http = require('http');
var dt = require('./DateModule');
 //Create a server object:
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    //res.write("The date and time are currently: " + dt.myDateTime()); // write a response to the client
    res.write(req.url);
    res.end();// end the response
}).listen(8080); // the server object listens on port 8080