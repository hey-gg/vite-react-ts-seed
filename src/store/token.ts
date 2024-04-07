/*
 * @Author: heyong
 * @Date: 2024-04-07 17:33:30
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-07 17:46:58
 */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface TokenState {
    token: string;
    setToken: (token: string) => void;
}


// persist 函数接受两个参数：第一个参数是一个函数，用于定义初始状态和更新状态的逻辑；
// 第二个参数是一个对象，用于配置持久化的参数。 persist 中间件简化了状态的持久化过程
const useTokenStore = create<TokenState>()(
    persist(
        (set) => ({
            token: '',
            setToken: (token: string) => set({ token }),
        }),
        {
            name: 'token-storage', //存储的名称
            storage: createJSONStorage(() => localStorage), // 默认存储到 localStorage，可设置为sessionStorage
        },
    )
);

export default useTokenStore;