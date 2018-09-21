import { loadPeopleAction } from '../actions';
import { LOAD_PEOPLE } from '../constants';

describe('PeopleList actions', () => {
  describe('Load Action', () => {
    it('has a type of LOAD_PEOPLE', () => {
      const expected = {
        type: LOAD_PEOPLE,
      };
      expect(loadPeopleAction()).toEqual(expected);
    });
  });
});
