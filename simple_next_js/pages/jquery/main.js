/*
 * jQuery 사용하기 
 - yarn add jquery

 * jQuery를 사용하기 위해서는 next.config.js 파일에서 reactStrictMode 속성을 false로 바꿔 주거나 제거해야한다. 
*/

import { useEffect } from "react";
import $ from 'jquery';

const main = () => {
    // jQuery는 컴포넌트가 렌더링될 때 최초 1회만 적용하면 된다.
    // React.js에서의 적용 방법도 동일하다.
    useEffect(() => {
        $('#btn').on('click', e => {
            e.preventDefault();

            // 화살표함수로 처리할 경우
            // $(this)가 $(e.currentTarget)으로 변경됨
            $(e.currentTarget).html('누름');
            $('#target').slideToggle();
        });
    },[]);

    return (
        <div>
            <h1>jQuery 사용하기</h1>
            <button id='btn'>Click</button>
            <div id='target' style={{
                width: '100%',
                padding: '30px',
                boxSizing: 'border-box',
                backgroundColor: '#06f',
                display: 'none'
            }}>Hello World</div>
        </div>
    )
};

export default main;