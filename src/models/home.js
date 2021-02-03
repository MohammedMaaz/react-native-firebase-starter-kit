import {localErrorHandler} from '../utils/errorHandler';
import {delay} from '../utils/utils';

const namespace = 'home';

export default {
  namespace,
  state: {},

  effects: {
    *apiCall({payload}, {call}) {
      try {
        yield call(delay, 2000);
      } catch (error) {
        localErrorHandler({namespace, error});
      }
    },
  },

  subscriptions: {},

  reducers: {
    setState(state, newState) {
      return {...state, ...newState};
    },
  },
};
