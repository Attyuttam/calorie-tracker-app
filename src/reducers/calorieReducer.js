import {SET_CALORIES} from '../constants/calorieConstants';
import rootState from './rootState';
export const calorieReducer = (state = rootState.calories, action) => {
    switch (action.type) {
      case SET_CALORIES:
        return [...action.calories];
      default:
        return state;
    }
  };
 export default calorieReducer;  
 export const selectAllCalories = (state) => state.calories;
 export const getCalorieById = (state,calorieId) =>{
  return state.calories.find(calorie => calorie.calorieId === calorieId)
}
export const getCalorieByUserId = (state,userId) =>{
  return state.calories.filter(calorie => calorie.userId === userId)
}
