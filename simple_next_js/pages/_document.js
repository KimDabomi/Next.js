import { Html, Head, Main, NextScript } from 'next/document'

/*
 * 화면 렌더링 함수 -> Html, Head, Main 첫 글자가 대문자임에 주의
 * getInitialProps() 함수에서 리턴하는 JSON객체를 this.props로 접근할 수 있다.
 * getInitialProps() 함수에서 리턴하는 JSON객체에 포함된 styleTags객체는 styledComponent의 결과 내용이므로 이를 <head>태그 안에 넣어줘야 한다.
*/
const Document = () => {

  return (
    <Html lang="en">
      {/* 
        <head>는 순수 HTML태그. <Head>는 next.js의 컴포넌트.
        이 안에서 charset과 viewport 지정은 자동으로 이루어진다.
        그 외에 개발자가 적용하고자 하는 외부 CSS나 JS리소스 참조, SEO 구현 등을 처리할 수 있다.
      */}
      <Head>
        {/* SEO 메타태그 */}
        <meta name='description' content='검색결과에 표시될 내용' />
        <meta name='robots' content='index,follow' />
        <meta name='keywords' content='SEO,검색엔진 최적화,메타 태그' />
        <meta name='author' content='leekh' />

        {/* SNS 메타태그 */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content='페이지 제목' />
        <meta property='og:description' content='페이지 설명' />
        <meta property='og:image' content='http://www.mysite.com/myimage.jpg' />
        <meta property='og:url' content='http://www.mysite.com' />

        {/* 웹폰트 적용을 위한 외부 리소스 참조 */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link href='https://fonts.googleapis.com/css2?family=Gugi&family=Noto+Sans+KR:wght@100;200;400;500&display=swap' ref='stylesheet' />

        {/* 전역 스타일 시트 (값에 따옴표를 사용할 수 없음) */}
        <style>{`
          * {font-family: Noto Sans KR;}
        `}</style>
      </Head>
      <body>
        {/* 이 구조를 기본으로 적용한 상태에서 일반 페이지용 js들이 이 위치에 출력된다. */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
};

export default Document;
