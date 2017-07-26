import mongoose from 'mongoose'
import {updataMetaTime} from '../../middle'

let TagSchema = new mongoose.Schema({
	_id: String,
	name: String,
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

TagSchema.pre('save', updataMetaTime)

TagSchema.statics = {
	getAll: function (cb) {
    return this
      .find({})
      .sort('updateAt')
      .exec(cb)
      .catch(err=>{this.throw(500, '服务器内部错误')})
  },
  removeById: function (id, cb) {
    return this
      .findByIdAndRemove({_id: id})
      .exec(cb)
      .catch(err => {
        if(err.name === 'CastError'){
          this.throw(400,'id不存在');
        }else{
          this.throw(500,'内部错误')
        }
      })
  },
  updateById: function (id, update, cb) {
    return this
      .findByIdAndUpdate({_id: id},{$set: update})
      .exec(cb)
      .catch(err => {
        if(err.name === 'CastError'){
          this.throw(400,'id不存在');
        }else{
          this.throw(500,'内部错误')
        }
      })
  }
}

export default TagSchema
