/*
 * @Author: heyong
 * @Date: 2024-04-08 10:41:46
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-08 10:46:31
 */
import HttpClient from '../../utils/axios';
import type { ListParams, ListModel } from './model/userModel';

export const getList = (params: ListParams) => {
    return HttpClient.get<ListModel>('/list', { params });
};
