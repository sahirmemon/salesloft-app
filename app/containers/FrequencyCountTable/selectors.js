import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the frequencyCountTable state domain
 */

const selectFrequencyCountTableDomain = state =>
  state.get('frequencyCountTable', initialState);

/**
 * Other specific selectors
 */
const makeSelectLoading = () =>
  createSelector(selectFrequencyCountTableDomain, substate =>
    substate.get('loading'),
  );

const makeSelectError = () =>
  createSelector(selectFrequencyCountTableDomain, substate =>
    substate.get('error'),
  );

const makeSelectFrequencyCount = () =>
  createSelector(selectFrequencyCountTableDomain, substate =>
    substate.getIn(['data', 'frequencyCount']),
  );

/**
 * Default selector used by FrequencyCountTable
 */

const makeSelectFrequencyCountTable = () =>
  createSelector(selectFrequencyCountTableDomain, substate => substate.toJS());

export {
  makeSelectFrequencyCountTable,
  makeSelectFrequencyCount,
  makeSelectError,
  makeSelectLoading,
};
