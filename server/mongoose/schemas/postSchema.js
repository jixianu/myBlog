import mongoose from 'mongoose'
import {updataMetaTime} from '../../middle'

let PostSchema = new mongoose.Schema({
  _id: String,
  title: String,
  author: String,
  date: Date,
  categories: String,
  tags: [],
  content: String,
  description: String,
  delivery: Boolean,
  imgUrl: String,
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

PostSchema.pre('save', updataMetaTime)

PostSchema.statics = {
  getAll: function (cb) {
    return this
      .find({})
      .sort('meta.updateAt')
      .exec(cb)
      .catch(err=>{this.throw(500, '服务器内部错误')})
  },
  getOne: function (id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
      .catch(err => {
        if(err.name === 'CastError'){
          this.throw(400,'id不存在');
        }else{
          utils.logger.error(err);
          this.throw(500,'内部错误')
        }
      })
  },
  findByKey: function (key, cb) {
    return this
      .find({title: new RegExp(key, 'i')})
      .sort('meta.updateAt')
      .exec(cb)
      .catch(err => {this.throw(500,'内部错误')})
  },
  removeById: function (id, cb) {
    return this
      .findByIdAndRemove({_id: id})
      .exec(cb)
      .catch(err => {
        if(err.name === 'CastError'){
          this.throw(400,'id不存在');
        }else{
          utils.logger.error(err);
          this.throw(500,'内部错误')
        }
      })
  },
  updateById: function (id, update, cb) {
    return this
      .findByIdAndUpdate({_id: id}, {$set: update})
      .exec(cb)
      .catch(err => {
        if(err.name === 'CastError'){
          this.throw(400,'id不存在');
        }else{
          utils.logger.error(err);
          this.throw(500,'内部错误')
        }
      })
  }
}

export default PostSchema
