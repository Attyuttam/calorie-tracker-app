import { put, call } from "redux-saga/effects";
import { takeLatest } from "redux-saga";
import {
  LOAD_CALORIES,
  SAVE_CALORIE,
  SET_CALORIES,
  UPDATE_CALORIE,
  DELETE_CALORIE
} from "../constants/calorieConstants";
import { toast } from "react-toastify";

function* getCaloriesWorker() {
  try {
    let calories;
    try {
      const response = yield call(fetch, "http://localhost:8085/v1/calories");
      calories = yield response.json();
    } catch (e) {
      console.log("Could not load calories");
      return;
    }
    yield [put({ type: SET_CALORIES, calories })];
  } catch (error) {
    toast.error("Could not get calories because of: " + error);
  }
}
function* saveCalorieWorker(action) {
  try {
    const response = yield fetch("http://localhost:8085/v1/calorie", {
      method: "POST",
      body: JSON.stringify({
        userId: action.payload.userId,
        calorieCount: action.payload.calorieCount,
        calorieFoodType: action.payload.foodType,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    toast.success(response.responseString);
  } catch (error) {
    toast.error("Could not save calorie entry because of: " + error);
  }
}
function* deleteCalorieWorker(action) {
  try {
    const response = yield fetch("http://localhost:8085/v1/delete/calorie/"+action.payload.calorieId, {
      method: "DELETE",
    }).then((response) => response.json());

    toast.success(response.responseString);
  } catch (error) {
    toast.error("Could not delete calorie entry because of: " + error);
  }
}
function* updateCalorieWorker(action) {
  try {

    const response = yield fetch("http://localhost:8085/v1/update/calorie/"+action.payload.calorieId, {
      method: "POST",
      body: JSON.stringify({
        userId: action.payload.userId,
        calorieCount: action.payload.calorieCount,
        calorieFoodType: action.payload.calorieFoodType,
        date: action.payload.date,
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

export function* getCaloriesWatcher() {
  yield takeLatest(LOAD_CALORIES, getCaloriesWorker);
}
export function* saveCalorieWatcher() {
  yield takeLatest(SAVE_CALORIE, saveCalorieWorker);
}
export function* updateCalorieWatcher() {
  yield takeLatest(UPDATE_CALORIE, updateCalorieWorker);
}
export function* deleteCalorieWatcher() {
  yield takeLatest(DELETE_CALORIE, deleteCalorieWorker);
}