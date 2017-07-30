import koaRouter from 'koa-router'
import * as Category from '../mongoose/controllers/categoryCtrl.js'

const router = koaRouter()
router.prefix('/api/category')

// ------ 分类 ------
// 获取所有
router.get('/getAll', async (ctx, next) =>{
  ctx.body = await Category.getAll()
})
// 根据id删除
router.delete('/:id', async (ctx, next) =>{
 	const _id = ctx.params.id
 	ctx.body = await Category.remove(_id)
})
// 根据id更新
router.put('/update', async (ctx, next) =>{
 	const _id = ctx.request.body._id
 	const update = ctx.request.body
 	ctx.body = await Category.update(_id,update)
})
// 新增
router.post('/add', async (ctx, next) =>{
 	const newCategory = ctx.request.body
 	ctx.body = await Category.save(newCategory)
})

export default router
