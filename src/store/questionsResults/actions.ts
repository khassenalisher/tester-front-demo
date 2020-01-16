import { IQuizItemResult } from '../../types';
import { RESULTS, SET_TIME, CHANGE_RESULT } from './types';

export const setResults = (data: IQuizItemResult[]) => ({
  type: RESULTS,
  results: data,
});
export const setTimeInString= (data: string) => ({
  type: SET_TIME,
  time: data,
});
export const changeResult = (data: IQuizItemResult) => ({
  type: CHANGE_RESULT,
  result: data,
});

export default {
  setResults,
  setTimeInString,
  changeResult,
}
