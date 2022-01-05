import { toast } from "react-toastify";
import { call } from "redux-saga/effects";
import { takeLatest } from "redux-saga";
import {LOGOUT} from "../constants/loginLogoutConstants";


function* logoutWorker() {
  try {
    try {
      const response = yield call(fetch,"http://localhost:8085/logout",{method: "POST",});
      console.log("response dekho: ");
      console.log(response);
      window.location='http://localhost:8085';
    } catch (e) {
      console.log("Could not logout");
      return;
    }
  } catch (error) {
    toast.error("Could not logout because of: " + error);
  }
}
export function* logoutWatcher() {
    yield takeLatest(LOGOUT, logoutWorker);
  }