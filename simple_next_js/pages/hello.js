import Head from 'next/head';

const Hello = (props) => {
    return (
        <div>
            <Head>
                <title>헬로</title>
            </Head>
            <h1>여기는 hello.js입니다.</h1>
            <p>이 페이지는 <b>{props.from}</b>에서 실행되었습니다.</p>
            <ul>
                <li>a={props.a}</li>
                <li>b={props.b}</li>
            </ul>
        </div>
    );
};

// 모든 pages폴더 내의 함수들은 getInitialProps라는 하위 함수를 갖는다. 이 함수를 통해 각 페이지가 웹 프로그램으로 동작할 수 있는 기능을 넘겨받는다. 
// ex) 브라우저의 요청을 받기 위한 request 객체 등
Hello.getInitialProps = async (props) => {
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

export default Hello;