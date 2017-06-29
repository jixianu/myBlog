import mongoose from 'mongoose'
import '../models/tagModel'
const Tag = mongoose.model('Tag')

export function save(newTag) {
  const _tag = new Tag(newTag)
  _tag.save(err=> {
    if (err) {
      console.log(err)
    }
    console.log('已保存')
  })
}

export function getAll() {
  return Tag.getAll((err, Tag)=> {
    if (err) {
      console.log(err)
    }
    console.log(Tag)
  })
}

export function remove(id) {
  return Tag.removeById(id, (err, Tag)=> {
    if (err) {
      console.log(err)
    }
    console.log(Tag)
  })
}

import uuid from 'uuid'
import mock from 'mockjs'

var newTag1 = new Tag(mock.mock({
  _id: uuid.v4(),
  name: '@cword(3,6)'
}))

console.log(newTag1)
newTag1.save();