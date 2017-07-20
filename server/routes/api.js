const router = require('koa-router')()
const Post = require('../mongoose/controllers/postCtrl.js')
const Tag = require('../mongoose/controllers/tagCtrl.js')
const Category = require('../mongoose/controllers/categoryCtrl.js')

router.prefix('/api')
// ctx.body 是输出的，不是读取的，ctx.body = 'hi, egg';
// ctx.request.body 是输入的 POST body
// ctx.query 才是输入的查询参数 /news?page=12 -> ctx.query.page
// ctx.param 是路由匹配的，来自于 koa-router，/users/:id -> ctx.param.id

// ------ 文章 ------
// 获取所有
router.get('/post/getAll', async (ctx, next) =>{
  ctx.body = await Post.getAll()
})
// 根据id查找
router.get('/post/:id', async (ctx, next) =>{
	const _id = ctx.params.id
  ctx.body = await Post.getOne(_id)
})
// 根据id删除
router.delete('/post/:id', async (ctx, next) =>{
	const _id = ctx.params.id
  ctx.body = await Post.remove(_id)
})
// 根据id更新
router.put('/post/update', async (ctx, next) =>{
	const _id = ctx.request.body._id
	const update = ctx.request.body
  ctx.body = await Post.update(_id, update)
})
// 新增
router.post('/post/add', async (ctx, next) =>{
	const newPost = ctx.request.body
  ctx.body = await Post.save(newPost)
})

// ------ 标签 ------
// 获取所有
router.get('/tag/getAll', async (ctx, next) =>{
  ctx.body = await Tag.getAll()
})
// 根据id删除
router.delete('/tag/:id', async (ctx, next) =>{
 	const _id = ctx.params.id
 	ctx.body = await Tag.remove(_id)
})
// 根据id更新
router.put('/tag/update', async (ctx, next) =>{
 	const _id = ctx.request.body._id
 	const update = ctx.request.body
 	ctx.body = await Tag.update(_id,update)
})
// 新增
router.post('/tag/add', async (ctx, next) =>{
 	const newTag = ctx.request.body
 	ctx.body = await Tag.save(newTag)
})
// ------ 分类 ------
// 获取所有
router.get('/category/getAll', async (ctx, next) =>{
  ctx.body = await Category.getAll()
})
// 根据id删除
router.delete('/category/:id', async (ctx, next) =>{
 	const _id = ctx.params.id
 	ctx.body = await Category.remove(_id)
})
// 根据id更新
router.put('/category/update', async (ctx, next) =>{
 	const _id = ctx.request.body._id
 	const update = ctx.request.body
 	ctx.body = await Category.update(_id,update)
})
// 新增
router.post('/category/add', async (ctx, next) =>{
 	const newCategory = ctx.request.body
 	ctx.body = await Category.save(newCategory)
})

module.exports = router