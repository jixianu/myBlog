const router = require('koa-router')()
const Post = require('../mongoose/controllers/postCtrl.js')

router.prefix('/api')

router.get('/getAll', async (ctx, next) =>{
  ctx.body = await Post.getAll()
})

module.exports = router