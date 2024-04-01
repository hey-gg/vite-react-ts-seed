/*
 * @Author: heyong
 * @Date: 2024-04-01 19:50:55
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-01 19:52:04
 */
import { useShallow } from 'zustand/react/shallow';

import useUserStore from '@/store/user';

const Token = () => {
    // 在token组件中同样使用useShallow进行包裹，否则token值的更新，也同样会触发user组件不必要的更新
    const { token, updateToken } = useUserStore(
        useShallow((state) => ({ token: state.token, updateToken: state.updateToken })),
    );

    console.log('token组件更新');

    return (
        <>
            <div>token：{token}</div>
            <button onClick={() => updateToken('23652')}>更新token</button>
        </>
    );
};

export default Token;
