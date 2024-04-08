/*
 * @Author: heyong
 * @Date: 2024-04-01 15:52:38
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-08 10:59:21
 */
import { defineConfig, loadEnv } from 'vite' //使用 loadEnv 读取环境变量
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer';
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
  // 默认情况下插件在开发 (serve) 和生产 (build) 模式中都会调用，使用 apply 属性指明它们仅在 'build' 或 'serve' 模式时调用
  plugins: [{
    ...viteCompression(),
    apply: 'build',   // 生成 .gz 插件仅需在打包时使用
  },
  visualizer({ open: true }),  // 分析生成包的大小
  ],
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
  build: {
    rollupOptions: {   // vite的打包基于rollup
      output: { //  js和css文件夹分离
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        manualChunks: {  // 分包
          react: ['react', 'react-dom', 'react-router-dom', 'zustand'],
          antd: ['antd'],
        },
      },
    },
  }
})
