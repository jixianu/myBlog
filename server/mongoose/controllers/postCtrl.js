import mongoose from 'mongoose'
import '../models/postModel'
const Post = mongoose.model('Post')

export function save(newPost) {
  const _post = new Post(newPost)
  _post.save()
}

export function getAll() {
  return Post.getAll()
}

export function getOne(id) {
  return Post.getOne(id)
}

export function update(id, update) {
  return Post.updateById(id, update)
}

export function remove(id) {
  return Post.removeById(id)
}

export function search(key) {
  return Post.findByKey(key)
}

import uuid from 'uuid'
import mock from 'mockjs'

var newPost1 = new Post(mock.mock({
  _id: uuid.v4(),
  title: '@csentence(3,8)',
  author: '@cname',
  date: '@date',
  categories: '@cword(1,5)',
  tags: ['@cword(1,5)','@cword(1,5)','@cword(1,5)'],
  content: '@paragraph',
  description: '@sentence(5)',
  imgUrl: '@url',
  delivery: '@boolan'
}))

console.log(newPost1)
newPost1.save();