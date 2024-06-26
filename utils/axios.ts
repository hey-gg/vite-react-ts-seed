/*
 * @Author: heyong
 * @Date: 2024-04-08 10:29:06
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-08 10:39:37
 */
import axios from 'axios';

/*
 * 创建实例
 * 与后端服务通信
 */
const HttpClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});


/**
 * 请求拦截器
 * 功能：配置请求头
 */
HttpClient.interceptors.request.use(
    (config) => {
        const token = '';
        config.headers.Authorization = `Bearer ${token}`
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error)
    }
)

/**
 * 响应拦截器
 * 功能：处理异常
 */
HttpClient.interceptors.response.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default HttpClient;