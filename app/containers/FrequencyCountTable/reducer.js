/*
 *
 * FrequencyCountTable reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_FREQUENCY_COUNT,
  LOAD_FREQUENCY_COUNT_SUCCESS,
  LOAD_FREQUENCY_COUNT_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  data: {
    frequencyCount: false,
  },
});

function frequencyCountTableReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FREQUENCY_COUNT:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['data', 'frequencyCount'], false);
    case LOAD_FREQUENCY_COUNT_SUCCESS:
      return state
        .setIn(['data', 'frequencyCount'], action.frequencyCount)
        .set('loading', false);
    case LOAD_FREQUENCY_COUNT_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default frequencyCountTableReducer;
