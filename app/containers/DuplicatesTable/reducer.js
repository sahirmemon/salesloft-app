/*
 *
 * DuplicatesTable reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_DUPLICATES,
  LOAD_DUPLICATES_SUCCESS,
  LOAD_DUPLICATES_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  data: {
    duplicates: false,
  },
});

function duplicatesTableReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DUPLICATES:
      return state
        .set('loading', true)
        .set('loading', false)
        .setIn(['data', 'duplicates'], false);
    case LOAD_DUPLICATES_SUCCESS:
      return state
        .setIn(['data', 'duplicates'], action.duplicates)
        .set('loading', false);
    case LOAD_DUPLICATES_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default duplicatesTableReducer;
