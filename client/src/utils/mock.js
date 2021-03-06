import Mock from 'mockjs'
const {Random} = Mock

export const articles = Mock.mock({
  'articleList|8': [{
    'id': '@natural',
    'time': '@date',
    'title': '@title(6,8)',
    'content': '@cparagraph',
    'description': '@sentence(10,12)',
    'tags|2-4': [{
      'text' :'@word(3,12)'
    }],
    'url': Random.image('150x150', Random.color(), '#FFF', Random.word(3, 5))
  }]
});

export const top10 = Mock.mock({
  'topList|10': [{
    'id': '@natural',
    'articlename': '@cword(3,7)',
    'url': '@domain()'
  }]
});

export const messages = Mock.mock({
  'messageList|5-8': [{
    'id': '@natural',
    'title': '@ctitle(5,10)',
    'name': '@name',
    'url': Random.image('40x40', Random.color(), '#FFF', Random.word(3, 5))
  }]
});

export const correlations = Mock.mock({
  'correlationList|5-8': [{
    'id': '@natural',
    'title': '@ctitle(6,10)',
    'name': '@name',
    'url': Random.image('40x40', Random.color(), '#FFF', Random.word(3, 5))
  }]
});

export const musicTop = Mock.mock({
  'musicList|10':[{
    'uniquekey' : '@natural',
    'title': '@ctitle(3,6)'
  }]
})
