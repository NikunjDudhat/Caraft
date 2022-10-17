import { loginSagaCall } from "./login.saga";
import { all } from 'redux-saga/effects'



export function* rootSaga () {
    yield all ([loginSagaCall()])
}