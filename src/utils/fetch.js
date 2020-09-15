import axios from 'axios'

let baseURL='http://localhost:8096/api/v1'
const instance = axios.create({
    baseURL: baseURL,
    timeout: 7000,
    headers: {}
})

//请求拦截器：在请求被发送出去之前，做一些验证工作。
instance.interceptors.request.use(function (config) {
    //加token  ----- token作用：是用户鉴权
    config.headers.Authorization=localStorage.getItem('token')|| ''
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  //响应拦截器：在响应到达之前，先进行数据过滤
instance.interceptors.response.use(function (response) {
    if(response.status === 200){
        if(response.data && response.data.msg){
            return response.data;
        }else{
            alert('响应被拦截')
        }
    }
  }, function (error) {
    return Promise.reject(error);
  });

export default instance