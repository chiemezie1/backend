const http = require('http');
const fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode){
    if(!responseCode){
        responseCode = 200;
    }
    fs.readFile(__dirname + path, (err, data) =>{
        if(err){
            res.writeHead(500, {
                "content-type": "text/plain"
            });
            res.end("500- internal error");
        } else {
            res.writeHead(responseCode, {
                "content-type": contentType
            });
            res.end(data);
        }
    });
}

http.createServer((req, res) =>{
    var path = req.url.replace(/\/?(?:\?.*)?$/,"").toLowerCase();
    switch(path){
        case "":
            serveStaticFile(res, "/public/home.html", "text/html", 200);
            break;
        case "/about":
            serveStaticFile(res, "/public/about.html", "text/html", 200);
            break;
        case "/img/logo.svg":
            serveStaticFile(res, "/public/img/logo.svg", "image/svg+xml", 200);
            break;
        default:
            serveStaticFile(res, "/public/404.html", "text/html", 404);
            break;
    }
}).listen(3003);

console.log('Server started on localhost:3002; press Ctrl-C to terminate....');