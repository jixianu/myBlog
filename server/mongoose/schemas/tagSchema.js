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
  },
  removeById: function (id, cb) {
    return this
      .findByIdAndRemove({_id: id})
      .exec(cb)
  }
}

export default TagSchema
