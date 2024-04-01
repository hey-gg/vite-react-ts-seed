/*
 * @Author: heyong
 * @Date: 2024-04-01 18:36:13
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-01 19:30:36
 */
import { Navigate } from 'react-router-dom';

const Manage = () => {
  // 情景：当没有权限时，重定向到登录页  replace={true}：进行重定向
  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" replace={true} />;
  }

  return <div>manage</div>;
};

export default Manage;

