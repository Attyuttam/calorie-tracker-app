import {
  LOAD_CALORIES,
  SAVE_CALORIE,
  UPDATE_CALORIE,
  DELETE_CALORIE
} from "../constants/calorieConstants";

export const loadCalories = () => ({
  type: LOAD_CALORIES,
});
export const saveCalorie = (userId, calorieCount, foodType) => ({
  type: SAVE_CALORIE,
  payload: { userId, calorieCount, foodType },
});

export const updateCalorie = (
  calorieId,
  userId,
  calorieCount,
  calorieFoodType,
  date
) => ({
  type: UPDATE_CALORIE,
  payload: { calorieId, userId, calorieCount, calorieFoodType, date },
});


export const deleteCalorie = (
  calorieId,
) => ({
  type: DELETE_CALORIE,
  payload: { calorieId },
});
