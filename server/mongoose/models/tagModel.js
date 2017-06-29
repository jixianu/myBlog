import mongoose from 'mongoose'
import TagSchema from '../schemas/tagSchema'

const TagModel = mongoose.model('Tag', TagSchema)

export default TagModel