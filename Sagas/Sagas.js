import { takeLatest, call, put } from "redux-saga/effects";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

getData = async () => {
  return await fetch("https://dog.ceo/api/breeds/image/random");
};

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const responce = yield call(getData);
    const data = JSON.stringify(responce);

    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
