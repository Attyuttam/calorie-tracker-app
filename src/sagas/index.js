import { fork } from "redux-saga/effects";
import { getCaloriesWatcher,saveCalorieWatcher,updateCalorieWatcher ,deleteCalorieWatcher} from "./caloriesSaga";

import { getUsersWatcher,saveUserWatcher,updateUserWatcher,deleteUserWatcher } from "./usersSaga";
import {logoutWatcher} from "./loginLogoutSaga";

export default function* rootSaga(){
  yield fork(getCaloriesWatcher);
  yield fork(getUsersWatcher);
  yield fork(saveUserWatcher);
  yield fork(updateUserWatcher);
  yield fork(saveCalorieWatcher);
  yield fork(updateCalorieWatcher);
  yield fork(deleteCalorieWatcher);
  yield fork(deleteUserWatcher);
  yield fork(logoutWatcher);
}
