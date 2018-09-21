import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import request from 'utils/request';
import config from '../../../config';
import { LOAD_PEOPLE } from './constants';
import { loadPeopleSuccessAction, loadPeopleErrorAction } from './actions';

// Gets all PEOPLE from SalesLoft API and calls the success action
export function* getPeople() {
  const requestUrl = `${config.apiUrl}/v2/people.json`;
  try {
    const people = yield call(request, requestUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.apiKey}`,
      },
    });
    yield put(loadPeopleSuccessAction(people));
  } catch (err) {
    yield put(loadPeopleErrorAction(err));
  }
}

// Root saga manages the watcher lifecycle
export default function* peopleData() {
  // Watch for LOAD_PEOPLE and call getPeople soon as the action is called
  yield takeLatest(LOAD_PEOPLE, getPeople);
}
