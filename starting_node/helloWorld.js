var http = require('http');
http.createServer(function(req,res){
 res.writeHead(200, { 'Content-Type': ' text/html' });
 res.end('<p>Hello world!</p>');
}).listen(3002);
console.log('Server started on localhost:3002; press Ctrl-C to terminate....');
