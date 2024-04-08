/*
 * @Author: heyong
 * @Date: 2024-04-01 15:52:38
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-08 09:55:28
 */
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import './index.scss';

import ReactDOM from 'react-dom/client';

import router from './routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// 在Suspense组件中渲染lazy组件，Suspense组件置于懒加载组件之上的任何位置；如果有嵌套路由，则需再使用Suspense组件包裹
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
  </Suspense>,
);

