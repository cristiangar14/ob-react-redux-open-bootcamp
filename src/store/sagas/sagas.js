import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { API_CALL_REQUEST } from "../actions/asyncActions";

//Watcher SAGA
//Listens the API_CALL_REQUEST actions
export function* watcherSaga() {
  //Listens the action and start a worker saga
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

//Worker SAGA
//Is called from watcher saga, dos the login and dispatch an action
export function* workerSaga(action) {
  try {
    const response = yield call(fetchHttp(action.payload.request));
    //We obtain the token from response
    const token = response.data.token;
    yield put({
      type: action.payload.okAction,
      payload: {
        token,
      },
    });
  } catch (error) {
    yield put({
      type: action.payload.failAction,
      payload: {
        error,
      },
    });
  }
}

function fetchHttp(request) {
  return function () {
    return axios(request);
  };
}
