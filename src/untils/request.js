import axios from 'axios'

//安装axios  在引入

//axios自带的create方法
const instance = axios.create({
  // 公共的api接口地址
  baseURL: 'https://www.fastmock.site/mock/4f303e7c9f2cfef78224acfddcdd7e49/api',
  // 超时时间
  timeout: 10000
})
//封装get请求  
// url 接口地址 params地址要传递的信息 默认情况是空
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
//post 接口地址 data数据 默认情况是空
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      // 后端要求post是json格式所以设置请求头部
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
