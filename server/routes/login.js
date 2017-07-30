import koaRouter from 'koa-router'
import * as User from '../mongoose/controllers/userCtrl.js'

import md5  from 'md5'
import uuid  from 'uuid'
import jwt  from 'jsonwebtoken'
import config  from '../config'
import {setAdmin} from '../middle'
const cert = config.jwt.cert;

const router = koaRouter()
router.prefix('/api/login')

router.post('/', setAdmin , createToken)

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
        exp: Math.floor(Date.now()/1000) + 24 * 60 * 60 // 1 hours
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
        err: {
           status:  401,
           message: '密码不正确'  
        }
      }
    }
  } else {
    // ctx.throw(401,'用户名不存在');
    ctx.body = {
        success: false,
        err: {
           status:  401,
           message: '用户名不存在'  
        }
      }
  }

  await next()
}

export default router
