import jwt from 'jsonwebtoken'
import md5 from 'md5'
import uuid  from 'uuid'
import config from '../config'
import * as User from '../mongoose/controllers/userCtrl.js'

//  更新时间戳
export function updataMetaTime(next){
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }
  next()
}

//  创建初始管理员
export async function setAdmin(ctx, next){
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

//  验证token
export async function verifyToken(ctx, next){
  if (!ctx.header.authorization) {
    ctx.throw(401, 'no token detected in http header \'Authorization\'')
  }
  const _token = ctx.header.authorization.split(' ')[1]
  console.log(_token)
  let tokenContent;
  try{
    tokenContent = await jwt.verify(_token, config.jwt.cert);
  }catch(err){
    if('TokenExpiredError' === err.name){
      ctx.throw(401,'token expired');
    }
    ctx.throw(401,'invalid token')
  }
  ctx.token = tokenContent
  await next()
}

