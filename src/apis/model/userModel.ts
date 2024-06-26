/*
 * @Author: heyong
 * @Date: 2024-04-08 10:43:34
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-08 10:43:47
 */
//定义请求参数
export interface ListParams {
    id: number; //用户id
}

export interface RowItem {
    id: number; //文件id
    fileName: string; //文件名
}

//定义接口返回数据
export interface ListModel {
    code: number;
    data: RowItem[];
}
