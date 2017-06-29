import mongoose from 'mongoose'
import CategorySchema from '../schemas/categorySchema'

const CategoryModel = mongoose.model('Category', CategorySchema)

export default CategoryModel