const router = require('koa-router')()
const Post = require('../mongoose/controllers/postCtrl.js')
const Tag = require('../mongoose/controllers/tagCtrl.js')
const Category = require('../mongoose/controllers/categoryCtrl.js')

router.prefix('/api')

router.get('/post/getAll', async (ctx, next) =>{
  ctx.body = await Post.getAll()
})

router.delete('/post/:id', async (ctx, next) =>{
	const _id = ctx.params.id
  ctx.body = await Post.remove(_id)
})

router.get('/tag/getAll', async (ctx, next) =>{
  ctx.body = await Tag.getAll()
})

router.get('/category/getAll', async (ctx, next) =>{
  ctx.body = await Category.getAll()
})

module.exports = router