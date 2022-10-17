import { call, put, takeEvery, all } from 'redux-saga/effects'
import { GoogleLoginAPI, LoginApi, LogoutAPI, ResetPasswordAPI, SignUpApi } from '../../common/apis/login.api';
import { history } from '../../history';

import { setAlert } from '../Action/alert.action';
import { EmailVerify, LogginUser, LoggoutUser } from '../Action/auth.action';
import * as ActionType from '../ActionType'


function* signUpsaga(action) {

   try {
      const user = yield call(SignUpApi, action.payload);
      yield put(setAlert({text: user.payload, color: "success"}))
   } catch (e) {
      yield put(setAlert({text: e.payload, color: "error"}))
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* loginsaga(action) {
   try {
      const user = yield call(LoginApi, action.payload); 
      history.push('/');
      yield put(setAlert({text: "Login Successfully", color: "success"}))
      yield put(LogginUser(user.user));
   } catch (e){
      yield put(setAlert({text: e.payload, color: "error"}))
   }
}

function* Logout(action){
   try{
      const user = yield call(LogoutAPI, action.payload)
      history.push('/');
      yield put(LoggoutUser(user));
      yield put(setAlert({text: user.payload, color: "success"}))
   } catch(e){
      yield put(setAlert({text: e.payload, color: "error"}))
   }
}

function* GoogleLogin(action){
   try{
      const user = yield call(GoogleLoginAPI)
      history.push('/');
      yield put(setAlert({text: "Login Successfully", color: "success"}))
      yield put(LogginUser(user.user));
   } catch (e){
      yield put(setAlert({text: e.payload, color: "error"}))
   }
}

function* Reset(action){
   try{
      const user = yield call(ResetPasswordAPI, action.payload)
      history.push('/');
      yield put(setAlert({text: user.payload, color: "success"}))
   }catch(e){
      yield put(setAlert({text: e.payload, color: "error"}))
   }
}


function* watchsaga() {
  yield takeEvery(ActionType.LOGIN_USER, loginsaga);
}

function* signInsaga() {
   yield takeEvery(ActionType.SIGNUP_USER, signUpsaga);
}

function* signOutsaga() {
   yield takeEvery(ActionType.LOGOUT_USER, Logout);
}

function* Googlesaga() {
   yield takeEvery(ActionType.GOOGLE_USER, GoogleLogin);
}

function* ResetPasssaga() {
   yield takeEvery(ActionType.RESET_PASSWORD, Reset);
}


export function* loginSagaCall () {
    yield all ([
      watchsaga(),
      signInsaga(),
      signOutsaga(),
      Googlesaga(),
      ResetPasssaga()
   ])
}
