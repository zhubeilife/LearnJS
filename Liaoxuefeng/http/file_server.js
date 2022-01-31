'use strict'

var fs = require('fs')
var url = require('url')
var path = require('path')
var http = require('http')

var root = path.resolve(process.argv[2] || '.')

console.log('root path is ' + root)

var server = http.createServer(
    function (req, res) {
        var pathname = url.parse(req.url).pathname;
        var filepath = path.join(root, pathname);

        fs.stat(filepath, function (err, stats) {
            if (!err && stats.isFile()) {
                console.log('200' + req.url);
                res.writeHead(200);
                fs.createReadStream(filepath).pipe(res);
            } else {
                console.log('404 error');
                res.writeHead(404);
                res.end('404 Not found');
            }
        });
    }
);

server.listen(8080);
