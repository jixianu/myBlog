import mongoose from 'mongoose'
import PostSchema from '../schemas/postSchema'

const PostModel = mongoose.model('Post', PostSchema)

export default PostModel