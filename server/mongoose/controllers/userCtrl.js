import mongoose from 'mongoose'
import '../models/userModel'
const User = mongoose.model('User')

export function save(newUser) {
  const _user = new User(newUser)
  _user.save()
}

export function getOne(name) {
  return User.getOne(name)
}

export function getAll() {
  return User.getAll()
}