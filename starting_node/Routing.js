const http = require('http');

http.createServer((req, res) =>{
var path = req.url.replace(/\/?(?:\?.*)?$/,"").toLowerCase();
switch(path){
    case "":
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end("Home page");
        break;
    case "/about":
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end("About page");
        break;
    default:
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end("Page not found");
        break;
}
}).listen(3001);

console.log('Server started on localhost:3001; press Ctrl-C to terminate....');