// 转换响应
function parseResponse(response) {
  return Promise.all([response.status, response.statusText, response.json()])
}
// 检测状态
function checkStatus([status, statusText, data]) {
  if (status > 200 && status < 300) {
    return data
  } else {
    if (401 === status) {
      if ('token expired' === data.error) {
        alert('token已过期,请注意内容保存,并重新登录')
      } else if ('invalid token' === data.error) {
        deleteToken(store)
      }
    }
    let err = new Error(statusText)
    err.status = status
    err.err_message = data
    return Promise.reject(err)
  }
}
export default {
  get(url, param = {}, header = {}, host = process.env.api) {
    let reqHeaders = new Headers(header)
    reqHeaders.append('Accept', 'application/json')
    if (null !== store.state.token.token) {
      // 推特使用的Bearer
      reqHeaders.append('Authorization', 'Bearer ' + store.state.token.token)
    }
    let query = []
    Object.keys(param).forEach((item) => {
      query.push(`${item}=${encodeURLComponent(param[item])}`)
    })
    const params = query.length ? '?' + query.join('&') : ''
    url = host + url + params

    const init = {
      method: 'GET',
      headers: reqHeaders,
      credentials:"include",
      cache: 'default',
      mode:'cors'
    }
    return fetch(url, init)
      .then(parseResponse)
      .then(checkStatus)
  },
  post(url, param = {}, header = {}, host = process.env.api) {

  },
  put(url, param = {}, header = {}, host = process.env.api) {

  },
  patch(url, param = {}, header = {}, host = process.env.api) {

  },
  delete(url, param = {}, header = {}, host = process.env.api) {

  }
}
