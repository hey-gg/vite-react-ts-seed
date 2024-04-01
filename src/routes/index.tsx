/*
 * @Author: heyong
 * @Date: 2024-04-01 18:30:00
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-01 18:30:53
 */
import { createBrowserRouter } from 'react-router-dom';

import routes from './routes';

//可传第二个参数，配置base路径 { basename: "/app"}
const router = createBrowserRouter(routes);

export default router;
