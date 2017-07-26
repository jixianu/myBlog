const router = require('koa-router')()
const Tag = require('../mongoose/controllers/tagCtrl.js')

router.prefix('/api/tag')

// ------ 标签 ------
// 获取所有
router.get('/getAll', async (ctx, next) =>{
  ctx.body = await Tag.getAll()
})
// 根据id删除
router.delete('/:id', async (ctx, next) =>{
 	const _id = ctx.params.id
 	ctx.body = await Tag.remove(_id)
})
// 根据id更新
router.put('/update', async (ctx, next) =>{
 	const _id = ctx.request.body._id
 	const update = ctx.request.body
 	ctx.body = await Tag.update(_id,update)
})
// 新增
router.post('/add', async (ctx, next) =>{
 	const newTag = ctx.request.body
 	ctx.body = await Tag.save(newTag)
})

module.exports = router
