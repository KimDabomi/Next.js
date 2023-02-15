import '@/styles/globals.css';

// next.js에서 redux사용을 위한 추가 (1)
import wrapper from '@/store';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

// _document.js <body> 안에 들어가는 <Main /> 영역
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header />

      {/* 일반 페이지 컴포넌트를 출력한다. -> index.js, hello.js, world.js 등 */}
      <Component {...pageProps} />

      <Footer />
    </>
  );
};

// next.js에서 redux사용을 위한 추가 (2)
export default wrapper.withRedux(App);