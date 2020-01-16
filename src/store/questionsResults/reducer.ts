import { combineReducers } from 'redux';
import { IQuizItemResult } from '../../types';
import { CHANGE_RESULT, RESULTS, SET_TIME } from './types';

const results = (state = [], action: any): IQuizItemResult[] | null => {
  if (action.type === RESULTS) {
    return [...action.results];
  }
  if (action.type === CHANGE_RESULT) {
      const a =  state.map((item:IQuizItemResult) => {
        if (item.id === action.result.id) {
            item.id = action.result.id;
            item.question = action.result.question;
            item.answersWithResult = action.result.answersWithResult;
            item.isAnswered = action.result.isAnswered;
            item.isFavorite = action.result.isFavorite;
            return item;
        }
        return item;
      });
      return a;
  }
  return state;
};

const timeInString = (state = '00:00', action: any): string => {
  if (action.type === SET_TIME) {
    return action.time;
  }
  return state;
}

const questionReducer = combineReducers({
  results,
  timeInString,
});

export default questionReducer;
