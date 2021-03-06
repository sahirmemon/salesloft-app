import { fromJS } from 'immutable';
import peopleListReducer from '../reducer';

describe('peopleListReducer', () => {
  it('returns the initial state', () => {
    expect(peopleListReducer(undefined, {})).toEqual(
      fromJS({ loading: false, error: false, data: { people: false } }),
    );
  });
});
