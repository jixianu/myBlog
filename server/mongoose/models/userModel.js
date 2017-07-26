import mongoose from 'mongoose'
import UserSchema from '../schemas/userSchema'

const UserModel = mongoose.model('User', UserSchema)

export default UserModel