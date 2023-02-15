import { configureStore } from "@reduxjs/toolkit";

// next.js에서 추가 (1)
import { createWrapper } from "next-redux-wrapper";
import MovieRankSlice from './slice/MovieRankSlice';

// next.js에서 추가 (2)
// -> 기존의 store객체를 리턴하는 함수로 감싼다.

const makeStore = () => {
    const store = configureStore({
        // 개발자가 직접 작성한 Slice 오브젝트들이 명시되어야 한다.
        reducer: {
            // 추가되는 Slice들을 나열
            MovieRankSlice: MovieRankSlice
        },
        
        // 비동기 미들웨어 추가 (Ajax처리가 필요한 경우만 설정)
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
    });

    return store;
};


// next.js에서 추가 (3)
// -> store를 리턴하는 함수를 createWrapper()함수에 전달 후 리턴되는 객체를 export
const wrapper = createWrapper(makeStore);

export default wrapper;