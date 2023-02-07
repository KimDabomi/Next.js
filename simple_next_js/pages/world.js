import Head from 'next/head';

const World = (props) => {
    return (
        <div>
            <Head>
                <title>월드</title>
            </Head>
            <h1>여기는 world.js입니다.</h1>
            <p>이 페이지는 <b>{props.from}</b>에서 실행되었습니다.</p>
            <ul>
                <li>a={props.a}</li>
                <li>b={props.b}</li>
            </ul>
        </div>
    );
};

World.getInitialProps = async (props) => {
    console.log(props);
    
    const {num1,num2} = props.query;
    console.log(`num1=${num1}`);
    console.log(`num2=${num2}`);

    let from = 'front';

    if (props.req) {
        from = 'backend';
    }

    // 이 함수에서 return하는 객체는 컴포넌트함수에 props 파라미터로 전달된다.
    return {
        a: num1,
        b: num2,
        from: from
    };
};

export default World;