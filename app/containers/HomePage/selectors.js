import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePage = state => state.get('homePage', initialState);

/**
 * Other specific selectors
 */

const makeSelectLoading = () =>
  createSelector(selectHomePage, substate => substate.get('loading'));

const makeSelectError = () =>
  createSelector(selectHomePage, substate => substate.get('error'));

const makeSelectPeople = () =>
  createSelector(selectHomePage, substate =>
    substate.getIn(['data', 'people']),
  );

// /**
//  * Default selector used by HomePage
//  */

const makeSelectHomePage = () =>
  createSelector(selectHomePage, substate => substate.toJS());

export {
  makeSelectLoading,
  makeSelectError,
  makeSelectPeople,
  makeSelectHomePage,
};
