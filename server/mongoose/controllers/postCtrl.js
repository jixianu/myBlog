import mongoose from 'mongoose'
import '../models/PostModel'
const Post = mongoose.model('Post');

export function save(newPost) {
  const post = new Post(newPost)
  post.save(err=> {
    if (err) {
      console.log(err)
    }
    console.log('已保存')
  })
}

export function getAll() {
  return Post.getAll((err, Post)=> {
    if (err) {
      console.log(err)
    }
    console.log(Post)
  })
}

export function getOne(id) {
  return Post.getOne(id, (err, Post)=> {
    if (err) {
      console.log(err)
    }
    console.log(Post)
  })
}

export function update(id, update) {
  return Post.updateById(id, update, (err, Post)=> {
    if (err) {
      console.log(err)
    }
    console.log(Post)
  })
}

export function remove(id) {
  return Post.removeById(id, (err, Post)=> {
    if (err) {
      console.log(err)
    }
    console.log(Post)
  })
}

export function search(key) {
  return Post.findByKey(key, (err, Post)=> {
    if (err) {
      console.log(err)
    }
    console.log(Post)
  })
}

import uuid from 'uuid'
import mock from 'mockjs'

var newPost1 = new Post(mock.mock({
  _id: uuid.v4(),
  title: 123,
  date: '@date',
  categories: '@cword(1,5)',
  tags: ['@cword(1,5)','@cword(1,5)','@cword(1,5)'],
  content: '@paragraph',
  description: '@sentence(5)',
  delivery: '@boolan'
}))

console.log(newPost1)
newPost1.save();
/*newPost2.save();
newPost3.save();
newPost4.save();
newPost5.save();*/