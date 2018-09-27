import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the duplicatesTable state domain
 */

const selectDuplicatesTableDomain = state =>
  state.get('duplicatesTable', initialState);

/**
 * Other specific selectors
 */
const makeSelectLoading = () =>
  createSelector(selectDuplicatesTableDomain, substate =>
    substate.get('loading'),
  );

const makeSelectError = () =>
  createSelector(selectDuplicatesTableDomain, substate =>
    substate.get('error'),
  );

const makeSelectDuplicates = () =>
  createSelector(selectDuplicatesTableDomain, substate =>
    substate.getIn(['data', 'duplicates']),
  );

/**
 * Default selector used by DuplicatesTable
 */

const makeSelectDuplicatesTable = () =>
  createSelector(selectDuplicatesTableDomain, substate => substate.toJS());

export {
  makeSelectDuplicatesTable,
  makeSelectDuplicates,
  makeSelectLoading,
  makeSelectError,
};
