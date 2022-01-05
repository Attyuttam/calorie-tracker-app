
  import { combineReducers } from 'redux';
  import userReducer from './userReducer';
  import calorieReducer from './calorieReducer';
  
  const rootReducer = combineReducers({
    users:userReducer, calories:calorieReducer
  });
  
  export default rootReducer;
  