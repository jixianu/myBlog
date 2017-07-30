import koaRouter from 'koa-router'
import * as Post from '../mongoose/controllers/postCtrl.js'
import {verifyToken} from '../middle'
const router = koaRouter()

router.prefix('/api/post')
// ctx.body 是输出的，不是读取的，ctx.body = 'hi, egg';
// ctx.request.body 是输入的 POST body
// ctx.query 才是输入的查询参数 /news?page=12 -> ctx.query.page
// ctx.param 是路由匹配的，来自于 koa-router，/users/:id -> ctx.param.id

// ------ 文章 ------
// 获取所有
router.get('/getAll', verifyToken, async (ctx, next) =>{
  ctx.body = await Post.getAll()
})
// 根据id查找
router.get('/:id', async (ctx, next) =>{
	const _id = ctx.params.id
  ctx.body = await Post.getOne(_id)
})
// 根据id删除
router.delete('/:id', async (ctx, next) =>{
	const _id = ctx.params.id
  ctx.body = await Post.remove(_id)
})
// 根据id更新
router.put('/update', async (ctx, next) =>{
	const _id = ctx.request.body._id
	const update = ctx.request.body
  ctx.body = await Post.update(_id, update)
})
// 新增
router.post('/add', async (ctx, next) =>{
	const newPost = ctx.request.body
  ctx.body = await Post.save(newPost)
})

export default router
