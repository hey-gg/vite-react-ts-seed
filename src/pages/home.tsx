/*
 * @Author: heyong
 * @Date: 2024-04-01 18:14:09
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-01 19:01:06
 */
import { Suspense } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const Home = () => {
    const navigation = useNavigate();
    return (
        <Wrapper>
            <div className="header"></div>
            <div className="main">
                <aside>
                    <div className="menu_item">
                        <NavLink to="/" end>
                            user
                        </NavLink>
                    </div>
                    <div className="menu_item">
                        {/* 声明式导航 默认类名为active。end表示精准匹配，否则当访问/manage/123时，类名也为active */}
                        <NavLink to="/manage" end>
                            manage
                        </NavLink>
                    </div>
                    <div className="menu_item">
                        {/* <NavLink to="/file/123" end>
                            file
                        </NavLink> */}
                        {/* 编程式传参 */}
                        {/* <NavLink to={{ pathname: '/file', search: '?sort=name&id=2222' }} end>
                            file
                        </NavLink> */}
                        {/* 命令式传参 */}
                        <button onClick={() => navigation({ pathname: '/file', search: '?sort=name&id=2' })}>file</button>
                    </div>
                </aside>
                <section>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </section>
            </div>
        </Wrapper>
    );
};

export default Home;

const Wrapper = styled.div`
  .header {
    height: 60px;
    border: 1px solid;
  }
  .main {
    height: calc(100vh - 60px);
    display: flex;
    aside {
      width: 260px;
      border: 1px solid;
      .active {
        color: red;
      }
    }
    section {
      flex: 1;
    }
  }
`;
