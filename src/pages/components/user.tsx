/*
 * @Author: heyong
 * @Date: 2024-04-01 19:45:58
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-01 19:57:04
 */
import { useShallow } from 'zustand/react/shallow';

import useUserStore from '@/store/user';
const User = () => {
    // 这里使用useShallow，是为了防止修改userInfo时，整个userStore存储状态更新，从而导致token组件也进行不必要的更新
    const { userInfo, updateUserInfo, updateAge } = useUserStore(
        useShallow((state) => ({
            userInfo: state.userInfo,
            updateUserInfo: state.updateUserInfo,
            updateAge: state.updateAge,
        })),
    );

    console.log('user组件更新');

    return (
        <>
            <div>
                姓名：{userInfo.name} 年龄：{userInfo.age}
            </div>
            <button onClick={() => updateUserInfo({ name: '李四', age: 24 })}>更新用户</button>
            <button onClick={() => updateAge(userInfo.age + 1)}>更新年龄</button>
        </>
    );
};

export default User;
