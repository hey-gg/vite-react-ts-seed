/*
 * @Author: heyong
 * @Date: 2024-04-01 18:35:56
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-01 19:26:24
 */
import { useNavigate } from 'react-router-dom';

const obj: any = {
    a: "2",
};
const User = () => {
    const navigation = useNavigate();
    return (
        <div>
            {obj.b.c}
            user
            {/* 编程式导航 */}
            <button onClick={() => navigation('/manage')}>跳管理页</button>
        </div>
    );
};

export default User;
