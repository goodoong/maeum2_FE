import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import logger from 'redux-logger';

/**
 * 애플리케이션의 '상태'를 관리하기 위한 Store 구성
 */
export const Store = configureStore({
    // combined된 여러개의 리듀서를 store에 저장합니다.
    reducer: RootReducer,

    // 미들웨어로 logger를 사용합니다.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default Store;
