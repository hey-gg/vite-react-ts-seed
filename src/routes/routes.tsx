/*
 * @Author: heyong
 * @Date: 2024-04-01 18:29:00
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-01 19:28:53
 */
/* eslint-disable react-refresh/only-export-components */
import ErrorBoundary from '@/pages/errorBoundary';
import { lazy } from 'react';

const Login = lazy(() => import('../pages/login'));
const Home = lazy(() => import('../pages/home'));
const User = lazy(() => import('../pages/user'));
const Manage = lazy(() => import('../pages/manage'));
const File = lazy(() => import('../pages/files'));


const routes = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorBoundary />, //挂载到父路由上  提示：如果路由没有配置errorElement，则错误将冒泡到最近的父路由上
        children: [
            {
                path: '/',
                element: <User />,
            },
            {
                path: '/manage',
                element: <Manage />,
            },
            // {
            //     path: '/file/:id?',
            //     element: <File />,
            // },
            {
                path: '/file',
                element: <File />,
            },
        ]
    },
    // 404路由放在路由配置表的最后
    {
        path: '*',
        element: <div>404</div>,
    },
];

export default routes;