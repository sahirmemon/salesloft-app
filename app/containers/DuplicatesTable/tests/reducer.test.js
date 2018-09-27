import { fromJS } from 'immutable';
import duplicatesTableReducer from '../reducer';

describe('duplicatesTableReducer', () => {
  it('returns the initial state', () => {
    expect(duplicatesTableReducer(undefined, {})).toEqual(fromJS({}));
  });
});
