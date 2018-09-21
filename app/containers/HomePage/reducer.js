/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_PEOPLE,
  LOAD_PEOPLE_SUCCESS,
  LOAD_PEOPLE_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  data: {
    people: false,
  },
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PEOPLE:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['data', 'people'], false);
    case LOAD_PEOPLE_SUCCESS:
      return state
        .setIn(['data', 'people'], action.people)
        .set('loading', false);
    case LOAD_PEOPLE_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default homePageReducer;
