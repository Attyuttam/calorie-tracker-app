import { SET_USERS } from "../constants/userConstants";
import rootState from "./rootState";
export const userReducer = (state = rootState.users, action) => {
  switch (action.type) {
    case SET_USERS:
      return [...action.users];
    default:
      return state;
  }
};
export default userReducer;

export const getAllUsers = (state) => state.users;

export const getUserById = (state,userId) =>{
  return state.users.find(user => user.userId === userId)
}