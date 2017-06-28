import mongoose from 'mongoose'
import PostSchema from '../schemas/PostSchema'

const PostModel = mongoose.model('Post', PostSchema)

export default PostModel