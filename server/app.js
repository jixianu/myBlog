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

const app = new Koa()

// error handler
onerror(app)

app.on('error', function(err,ctx){
	console.log(err);
});   
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


module.exports =  app
