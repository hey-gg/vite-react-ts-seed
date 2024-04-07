/*
 * @Author: heyong
 * @Date: 2024-04-07 17:14:03
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-07 17:28:33
 */
import { produce } from 'immer'
import { create } from 'zustand'

const getData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: '张三',
                age: 18,
            })
        }, 1000)
    })
}

interface ListState {
    list: number[];
    updateList: () => void;
}

// zustand可直接通过async，await来处理异步action
const userListStore = create<ListState>((set) => ({
    list: [],
    updateList: async () => {
        try {
            const data = await getData();
            set(produce((state) => {
                state.list.push(data)
            }))
            // 用 immer 中的 produce 函数来更新状态中的 list 数组。
            // 这样做是因为 immer 允许我们在不直接修改状态的情况下，生成一个新的状态对象，
            // 使状态更新更加安全和可预测。
        } catch {

        }
    }

}))

export default userListStore;