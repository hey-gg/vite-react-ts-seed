/*
 * @Author: heyong
 * @Date: 2024-04-01 15:52:38
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-08 10:02:57
 */
/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
