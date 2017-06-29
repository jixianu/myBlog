import mongoose from 'mongoose'
import '../models/categoryModel'
const Category = mongoose.model('Category')

export function save(newCategory) {
  const _category = new Category(newCategory)
  _category.save(err=> {
    if (err) {
      console.log(err)
    }
    console.log('已保存')
  })
}

export function getAll() {
  return Category.getAll((err, Category)=> {
    if (err) {
      console.log(err)
    }
    console.log(Category)
  })
}

export function remove(id) {
  return Category.removeById(id, (err, Category)=> {
    if (err) {
      console.log(err)
    }
    console.log(Category)
  })
}

import uuid from 'uuid'
import mock from 'mockjs'

var newCategory1 = new Category(mock.mock({
  _id: uuid.v4(),
  name: '@cword(3,6)'
}))

console.log(newCategory1)
newCategory1.save();