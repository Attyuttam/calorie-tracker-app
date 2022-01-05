import { put, call } from "redux-saga/effects";
import { takeLatest } from "redux-saga";
import {
  LOAD_USERS,
  SAVE_USER,
  SET_USERS,
  UPDATE_USER,
  DELETE_USER,
} from "../constants/userConstants";
import { toast } from "react-toastify";

function* getUsersWorker() {
  try {
    let users;
    const response = yield call(fetch, "http://localhost:8085/v1/users");
    users = yield response.json();
    yield [put({ type: SET_USERS, users })];
  } catch (error) {
    toast.error("Could not get user entry because of: " + error);
  }
}
function* saveUserWorker(action) {
  try {
    const response = yield fetch("http://localhost:8085/v1/user", {
      method: "POST",
      body: JSON.stringify({
        userName: action.payload.userName,
        userAge: action.payload.userAge,
        userAddress: action.payload.userAddress,
        userGender: action.payload.userGender,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    toast.success(response.responseString);
  } catch (error) {
    toast.error("Could not save user entry because of: " + error);
  }
}

function* updateUserWorker(action) {
  try {

    const response = yield fetch("http://localhost:8085/v1/update/user/"+action.payload.userId, {
      method: "POST",
      body: JSON.stringify({
        userName: action.payload.userName,
        userAge: action.payload.userAge,
        userAddress: action.payload.userAddress,
        userGender: action.payload.userGender,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    toast.success(response.responseString);
  } catch (error) {
    toast.error("Could not update user entry because of: " + error);
  }
}
function* deleteUserWorker(action) {
  try {
    const response = yield fetch("http://localhost:8085/v1/delete/user/"+action.payload.userId, {
      method: "DELETE",
    }).then((response) => response.json());

    toast.success(response.responseString);
  } catch (error) {
    toast.error("Could not delete user because of: " + error);
  }
}
export function* getUsersWatcher() {
  yield takeLatest(LOAD_USERS, getUsersWorker);
}
export function* saveUserWatcher() {
  yield takeLatest(SAVE_USER, saveUserWorker);
}
export function* updateUserWatcher() {
  yield takeLatest(UPDATE_USER, updateUserWorker);
}
export function* deleteUserWatcher() {
  yield takeLatest(DELETE_USER, deleteUserWorker);
}