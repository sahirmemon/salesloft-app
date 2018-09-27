import { fromJS } from 'immutable';
import frequencyCountTableReducer from '../reducer';

describe('frequencyCountTableReducer', () => {
  it('returns the initial state', () => {
    expect(frequencyCountTableReducer(undefined, {})).toEqual(fromJS({}));
  });
});
