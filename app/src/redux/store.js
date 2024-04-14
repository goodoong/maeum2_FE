import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './reducers/index';
import { composeWithDevTools } from "@redux-devtools/extension";
import rootSaga from './sagas'; // 루트로 사용할 사가를 불러온다.

const sagaMiddleware = createSagaMiddleware(); // 사가미들웨어 객체 생성

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware)),
);
sagaMiddleware.run(rootSaga); // 사가 미들웨어로 루트사가를 실행한다.

export default store;