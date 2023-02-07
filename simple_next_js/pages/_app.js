import '@/styles/globals.css'

import Header from '@/components/Header';
import Footer from '@/components/Footer';

// _document.js <body> 안에 들어가는 <Main /> 영역
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />

      {/* 일반 페이지 컴포넌트를 출력한다. -> index.js, hello.js, world.js 등 */}
      <Component {...pageProps} />

      <Footer />
    </>
  );
}
