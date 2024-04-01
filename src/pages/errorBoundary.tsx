/*
 * @Author: heyong
 * @Date: 2024-04-01 19:23:54
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-01 19:24:09
 */
import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
    const error = useRouteError();
    //错误信息，可用来错误上报
    console.log(error);
    return <>错误页面</>;
};

export default ErrorBoundary;
