/**
 * [Path 파라미터 받기]
 *
 * URL이 "/portfolio/변수명" 인 경우
 * 1) /portfolio 이라는 이름의 폴더를 생성
 * 2) /portfolio/[변수명].js 로 소스파일을 작성
 *
 * 주의!!! --> /portfolio이라는 이름의 폴더와 /portfolio.js 라는 파일이 함께 존재하면 
 *             route는 동작하지 않음. (파일이 우선순위)
 */

// 파라미터를 받기 위한 패키지 참조
import { useRouter } from 'next/router';

const Portfolio = () => {
    
};

export default Portfolio;