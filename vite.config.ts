/*
 * @Author: heyong
 * @Date: 2024-04-01 15:52:38
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-08 10:52:15
 */
import { defineConfig, loadEnv } from 'vite' //使用 loadEnv 读取环境变量
import react from '@vitejs/plugin-react'
import path from "path";  //这个path用到了安装的@types/node

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: '要代理的地址',
        changeOrigin: true,
        ws: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
  //这里进行配置别名
  resolve: {
    alias: {
      "@": path.resolve("./src"), // @代替src  ts 路径映射在修改tsconfig.json时通过baseUrl与paths属性已完成
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/index.scss";',
      },
    },
  },
})
