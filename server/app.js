import Koa from 'koa'
import views from 'koa-views'
import json from 'koa-json'
import onerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import post from './routes/post'
import tag from './routes/tag'
import category from './routes/category'
import login from './routes/login'
import test from './routes/test.js'
import cors from 'koa2-cors'

const app = new Koa()

// error handler
onerror(app)

app.on('error', function(err,ctx){
  console.log(err);
});
// 运行跨域   
app.use(cors({ 
    origin: function (ctx) { 
      if (ctx.url === '/test2') { 
        return "*";// 允许来自所有域名请求 
        } 
        return 'http://192.168.10.82'; // 这样就能只允许 本地IP这个域名的请求了 
      }, 
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'], 
    maxAge: 5, 
    credentials: true, 
    allowMethods: ['GET', 'POST', 'DELETE'], 
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], 
  }));
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(post.routes(), post.allowedMethods())
app.use(tag.routes(), tag.allowedMethods())
app.use(category.routes(), category.allowedMethods())
app.use(login.routes(), login.allowedMethods())

app.use(test.routes(), test.allowedMethods())

module.exports =  app
