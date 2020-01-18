import axios from 'axios';
import { message } from 'antd';

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

        promise.then(response => {
            resolve(response);
        }).catch(error => {
            // reject(error);
            message.error("出错了: ", error.message);
        });
    });
}