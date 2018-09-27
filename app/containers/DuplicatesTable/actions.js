/*
 *
 * DuplicatesTable actions
 *
 */

import {
  LOAD_DUPLICATES,
  LOAD_DUPLICATES_SUCCESS,
  LOAD_DUPLICATES_ERROR,
} from './constants';

// Load the DUPLICATES
// Trigger the saga
export function loadDuplicatesAction() {
  return {
    type: LOAD_DUPLICATES,
  };
}

// Dispatched when the DUPLICATES are loaded
export function loadDuplicatesSuccessAction(duplicates) {
  return {
    type: LOAD_DUPLICATES_SUCCESS,
    duplicates,
  };
}

// Dispatched when loading the DUPLICATES fail
export function loadDuplicatesErrorAction(error) {
  return {
    type: LOAD_DUPLICATES_ERROR,
    error,
  };
}
