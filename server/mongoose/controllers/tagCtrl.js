import mongoose from 'mongoose'
import '../models/tagModel'
const Tag = mongoose.model('Tag')

export function save(newTag) {
  const _tag = new Tag(newTag)
  _tag.save()
}

export function getAll() {
  return Tag.getAll()
}

export function remove(id) {
  return Tag.removeById(id)
}

export function update(id, update) {
  return Tag.updateById(id, update)
}

import uuid from 'uuid'
import mock from 'mockjs'

var newTag1 = new Tag(mock.mock({
  _id: uuid.v4(),
  name: '@cword(3,6)'
}))

console.log(newTag1)
newTag1.save();