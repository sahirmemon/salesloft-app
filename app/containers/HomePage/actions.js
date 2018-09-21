/*
 *
 * HomePage actions
 *
 */

import {
  LOAD_PEOPLE,
  LOAD_PEOPLE_SUCCESS,
  LOAD_PEOPLE_ERROR,
} from './constants';

// Load the PEOPLE
// This action starts the request saga
export function loadPeopleAction() {
  return {
    type: LOAD_PEOPLE,
  };
}

// Dispacthed when the PEOPLE are loaded by the request saga
export function loadPeopleSuccessAction(people) {
  return {
    type: LOAD_PEOPLE_SUCCESS,
    people,
  };
}

// Dispactched when loading the PEOPLE fails
export function loadPeopleErrorAction(error) {
  return {
    type: LOAD_PEOPLE_ERROR,
    error,
  };
}
