import axios from 'axios'
import store from '../vuex/store'
import * as types from '../vuex/mutation-types'
import router from '../router'

// axios 配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = process.env.api
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'
axios.defaults.headers.patch['Content-Type'] = 'application/json'

// http request 拦截器
axios.interceptors.request.use(
    config => {
      if (store.state.token) {// 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = `token ${store.state.token}`
      }
      return config;
    },
    err => {
      return Promise.reject(err);
    })

// http response 拦截器
axios.interceptors.response.use(
    res => {
      return res;
    },
    err => {
      if (err.res) {
        switch (err.res.status) {
          case 401:
            // 401 清除token信息并跳转到登录页面
            store.commit(types.LOGOUT);
            router.replace({
                path: 'login',
                query: {redirect: router.currentRoute.fullPath}
            })
        }
      }
      return Promise.reject(err.res)
    })

// 暴露方法对象
export default {
  get(url, param = {}){
    return axios({
      method: 'GET',
      url: url,
      params: param
    })
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
  },
  post(url, param = {}){
    return axios({
      method: 'POST',
      url: url,
      data: param
    })
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
  },
  put(url, param = {}){
    return axios({
      method: 'PUT',
      url: url,
      data: param
    })
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
  },
  patch(url, param = {}){
    return axios({
      method: 'PATCH',
      url: url,
      data: param
    })
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
  },
  delete(url, param = {}){
    return axios({
      method: 'DELETE',
      url: url,
      data: param
    })
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
  }
}