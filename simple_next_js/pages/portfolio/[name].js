/*
 * [Path 파라미터 받기]

 - URL이 "/portfolio/변수명" 인 경우
    1) /portfolio 라는 이름의 폴더를 생성
    2) /portfolio/[변수명].js 로 소스파일을 작성

 - 주의! /portfolio 라는 이름의 폴더와 /portfolio.js 라는 파일이 함께 존재하면 route는 동작하지 않음.(파일이 우선순위)
 */

 // 파라미터를 받기 위한 패키지 참조
 import { useRouter } from "next/router";

 const portfolio = () => {
    // hook을 통해 라우터 사용 시작
    const router = useRouter();

    console.log(router.query);

    return (
        <div className="container">
            <div className='page-header'>
                <h1>포트폴리오</h1>
            </div>
            <pre>{JSON.stringify(router.query)}</pre>
            <hr />

            {/* path 파라미터의 변수명은 파일이름과 동일하다. -> [변수명].js */}
            {
                (router.query.name === 'publish') ? (
                    <div>웹 퍼블리싱 포트폴리오</div>
                ) : ((router.query.name === 'frontend') ? (
                    <div>프론트엔드 포트폴리오</div>
                ) : (
                    <div>백엔드 포트폴리오</div>
                ))
            }
        </div>
    )
 }

 export default portfolio;
