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
  },
  getOne: function (id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  },
  findByKey: function (key, cb) {
    return this
      .find({title: new RegExp(key, 'i')})
      .sort('meta.updateAt')
      .exec(cb)
  },
  removeById: function (id, cb) {
    return this
      .findByIdAndRemove({_id: id})
      .exec(cb)
  },
  updateById: function (id, update, cb) {
    return this
      .findByIdAndUpdate({_id: id}, {$set: update})
      .exec(cb)
  }
}

export default PostSchema