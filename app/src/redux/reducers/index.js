import {combineReducers} from 'redux';
import reducer from './test';

export default combineReducers({
  test: reducer,
});