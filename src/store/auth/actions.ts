import { USER_AUTHENTICATION } from './types';

export const setUserAuth = (data: boolean) => ({
  type: USER_AUTHENTICATION,
  data: data,
});

export default {
  setUserAuth,
}
