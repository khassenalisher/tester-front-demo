import { USER_AUTHENTICATION } from './types';
import { combineReducers } from 'redux';

const userAuth = (state = false, action: any): boolean => {
  if (action.type === USER_AUTHENTICATION) {
    return action.data;
  }
  return state;
};


const authReducer = combineReducers({
  userAuth,
});
export default authReducer
