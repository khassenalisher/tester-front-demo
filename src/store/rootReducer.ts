import { combineReducers } from 'redux';

import questionReducer from './questionsResults/reducer';
import authReducer from './auth/reducer';

const rootReducer = combineReducers( {
  questionReducer,
  authReducer
});

export default rootReducer;
