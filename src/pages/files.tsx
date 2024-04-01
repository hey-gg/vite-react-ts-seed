/*
 * @Author: heyong
 * @Date: 2024-04-01 18:49:15
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-01 18:59:29
 */
import { useSearchParams } from 'react-router-dom';
// import { useParams, useSearchParams } from 'react-router-dom';
const File = () => {
    // const { id } = useParams();
    const [searchParams] = useSearchParams();
    return <div>
        获取id：{searchParams.get('id')}
        获取sort：{searchParams.get('sort')}
    </div>
};

export default File;
