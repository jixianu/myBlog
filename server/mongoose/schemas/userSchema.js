import mongoose from 'mongoose'
import {updataMetaTime} from '../../middle'

let UserSchema = new mongoose.Schema({
	_id: String,
	name: String,
	password: String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

UserSchema.pre('save', updataMetaTime)

UserSchema.statics = {
	getOne: function (name, cb) {
    return this
      .findOne({name: name})
      .exec(cb)
      .catch(err => {
        if(err.name === 'CastError'){
          this.throw(400,'id不存在');
        }else{
          this.throw(500,'内部错误')
        }
      })
  },
  getAll: function (cb) {
    return this
      .find({})
      .sort('updateAt')
      .exec(cb)
  }
}

export default UserSchema
