import { combineReducers } from 'redux';
import TestsReducer from './TestsReducer';

export default combineReducers({
  tests: TestsReducer
});
