'use strict'

const Koa = require('koa')

const app = new Koa();

const router = require('koa-router')();

app.use(async (ctx, next) => {
    console.log(`Log1 ${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Log2 Time: ${ms}ms`); // 打印耗费时间
});

router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}</h1>`;
    console.log('Log3');
})

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
    console.log('Log3');
})

app.use(router.routes());

app.listen(8080);