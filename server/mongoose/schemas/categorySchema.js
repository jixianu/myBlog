import mongoose from 'mongoose'
import {updataMetaTime} from '../../middle'

let CategorySchema = new mongoose.Schema({
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

CategorySchema.pre('save', updataMetaTime)

CategorySchema.statics = {
	getAll: function (cb) {
    return this
      .find({})
      .sort('meta.updateAt')
      .exec(cb)
  },
  removeById: function (id, cb) {
    return this
      .findByIdAndRemove({_id: id})
      .exec(cb)
  }
}

export default CategorySchema
