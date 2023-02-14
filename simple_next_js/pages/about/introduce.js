/*
 * Next.js의 Auto Route를 확인하는 용도의 샘플 파일
 * 각 컴포넌트의 구성방법은 React.js와 완벽하게 일치한다.
 */

import React, { useState,useCallback } from 'react';

const introduce = () => {
    const [msg,setMsg] = useState('');

    const onMsgChange = useCallback((e) => {
        const current = e.currentTarget;
        setMsg(current.value);
    },[]);

    return (
        <div>
            <div>
                <h2>소개글</h2>
            </div>
            <div>
                <input type='text' value={msg} onChange={onMsgChange} />
            </div>
            <div>
                <p>{msg}</p>
                <p>{msg}</p>
                <p>{msg}</p>
                <p>{msg}</p>
                <p>{msg}</p>
                <p>{msg}</p>
            </div>
        </div>
    );
};

export default introduce;