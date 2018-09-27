/*
 *
 * FrequencyCountTable actions
 *
 */

import {
  LOAD_FREQUENCY_COUNT,
  LOAD_FREQUENCY_COUNT_SUCCESS,
  LOAD_FREQUENCY_COUNT_ERROR,
} from './constants';

// Load the FREQUENCY COUNT
// This action starts the request saga
export function loadFrequencyCountAction() {
  return {
    type: LOAD_FREQUENCY_COUNT,
  };
}

// Dispacthed when the FREQUENCY COUNT is loaded by the request saga
export function loadFrequencyCountSuccessAction(frequencyCount) {
  return {
    type: LOAD_FREQUENCY_COUNT_SUCCESS,
    frequencyCount,
  };
}

// Dispactched when loading the FREQUENCY COUNT fails
export function loadFrequencyCountErrorAction(error) {
  return {
    type: LOAD_FREQUENCY_COUNT_ERROR,
    error,
  };
}
