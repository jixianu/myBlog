const router = require('koa-router')()
const User = require('../mongoose/controllers/userCtrl.js')
const md5 = require('md5')
const uuid = require('uuid')
const jwt = require('jsonwebtoken')
const config = require('../config')
const cert = config.jwt.cert;
router.prefix('/api/login')

/*router.post('/', async (ctx, next) => {
	ctx.body = {
		uid: 'user._id'
	}
})*/
router.post('/', setAdmin , createToken)

async function setAdmin(ctx, next){
	// 这里在表里查询用户
	const user = await User.getAll()

  if (user.length <=0 ) {
  	const new_user = {
  		_id: uuid.v4(),
      name: 'admin',
      password:md5('password').toUpperCase()
    }
    User.save(new_user)
  }

  await next()
}

async function createToken(ctx, next){
	const _name = ctx.request.body.username
  const _pwd = ctx.request.body.password
	const user = await User.getOne(_name)

	if ( user !== null) {
		console.log(_name,_pwd,user)
		if(user.password === _pwd){
      const token = jwt.sign({
        uid: user._id,
        name: user.name,
        exp: Math.floor(Date.now()/1000) + 24 * 60 * 60//1 hours
      },cert);
      ctx.body =  {
        success: true,
        data:{
          uid: user._id,
          name: user.name,
          token
        }
      }
    } else {
			ctx.body = {
				success: false,
				data: {
					
				}
			}(401,'密码错误')
		}
	} else {
    ctx.throw(401,'用户名不存在');
  }

  await next()
}

module.exports = router
