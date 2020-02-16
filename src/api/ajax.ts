import axios from 'axios';
import { message } from 'antd';

// 跨域请求设置
axios.defaults.baseURL = '/api';

// 封装axios异步请求
export default function ajax(url: string, data={}, type: string='GET') {

    return new Promise((resolve, reject) => {
        let promise;
        if (type === 'GET') {
            promise = axios.get(url, {
                params: data,
            });
        } else {
            promise = axios.post(url, data);
        }

        // 对axios所返回的promise进行错误处理
        promise.then(response => {
            resolve(response);
        }).catch(error => {
            // reject(error);
            message.error("出错了: ", error.message);
        });
    });
}