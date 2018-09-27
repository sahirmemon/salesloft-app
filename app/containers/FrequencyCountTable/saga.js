import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import request from 'utils/request';
import config from '../../../config';
import { LOAD_FREQUENCY_COUNT } from './constants';
import {
  loadFrequencyCountSuccessAction,
  loadFrequencyCountErrorAction,
} from './actions';

// Gets frequency count from the api and calls the success action
export function* getFrequencyCount() {
  const requestUrl = `${config.apiUrl}/api/people/frequency-count`;
  try {
    const frequencyCount = yield call(request, requestUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.apiKey}`,
      },
    });
    yield put(loadFrequencyCountSuccessAction(frequencyCount));
  } catch (err) {
    yield put(loadFrequencyCountErrorAction(err));
  }
}

// Root saga manages the watcher lifecycle
export default function* loadFrequencyCount() {
  // Watch for LOAD_FREQUENCY_COUNT and call getFrequencyCount soon as the action is called
  yield takeLatest(LOAD_FREQUENCY_COUNT, getFrequencyCount);
}
