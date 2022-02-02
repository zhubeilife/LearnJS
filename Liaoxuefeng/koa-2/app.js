'use strict'

const Koa = require('koa')

const app = new Koa();

const router = require('koa-router')();

const bodyParser = require('koa-bodyparser');

const fs = require('fs')

let files = fs.readdirSync(__dirname + '/controllers')

var jsFiles = files.filter((f) => f.endsWith('.js'))

for (var f of jsFiles) {
    console.log(`Process ${f}`);
    let mapping = require(__dirname + '/controllers/' + f);
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        }
    }
}

app.use(router.routes());

app.listen(8080);