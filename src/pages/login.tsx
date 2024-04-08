/*
 * @Author: heyong
 * @Date: 2024-04-01 18:13:34
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-08 10:48:54
 */
import { Button } from 'antd';
import { useRequest } from 'ahooks';
import { getList } from '@/apis/user';

const Login = () => {
    // 提示：useRequest可以帮助我们避免在请求中执行setState，而路由已切换导致内存泄漏问题。以及请求防抖，节流，轮询等功能。
    useRequest(getList, {
        defaultParams: [{ id: 2 }]
    });
    return (
        <div>
            登录页
            <Button type="primary">Button</Button>
        </div>
    );
};

export default Login;
