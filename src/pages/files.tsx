/*
 * @Author: heyong
 * @Date: 2024-04-01 18:49:15
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-01 19:05:24
 */
import { useLocation } from 'react-router-dom';
// import { useParams, useSearchParams } from 'react-router-dom';
const File = () => {
    // const { id } = useParams();
    // const [searchParams] = useSearchParams();
    // return <div>
    //     获取id：{searchParams.get('id')}
    //     获取sort：{searchParams.get('sort')}
    // </div>
    const { state } = useLocation();
    return <div>{state.id}</div>;
};

export default File;
