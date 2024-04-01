/*
 * @Author: heyong
 * @Date: 2024-04-01 18:29:00
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-01 18:53:52
 */
/* eslint-disable react-refresh/only-export-components */
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