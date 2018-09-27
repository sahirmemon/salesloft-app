import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import request from 'utils/request';
import config from '../../../config';
import { LOAD_DUPLICATES } from './constants';
import {
  loadDuplicatesSuccessAction,
  loadDuplicatesErrorAction,
} from './actions';

// Gets frequency count from the api and calls the success action
export function* getDuplicates() {
  const requestUrl = `${config.apiUrl}/api/people/duplicates`;
  try {
    const duplicates = yield call(request, requestUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.apiKey}`,
      },
    });
    yield put(loadDuplicatesSuccessAction(duplicates));
  } catch (err) {
    yield put(loadDuplicatesErrorAction(err));
  }
}

// Root saga manages the watcher lifecycle
export default function* loadDuplicates() {
  // Watch for LOAD_DUPLICATES and call getDuplicates soon as the action is called
  yield takeLatest(LOAD_DUPLICATES, getDuplicates);
}
