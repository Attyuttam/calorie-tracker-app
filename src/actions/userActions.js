import { LOAD_USERS,SAVE_USER,UPDATE_USER,DELETE_USER } from "../constants/userConstants";

export const loadUsers = () => ({
  type: LOAD_USERS,
});

export const saveUser = (userName, userAge, userAddress, userGender) => ({
  type: SAVE_USER,
  payload: { userName, userAge, userAddress, userGender },
});

export const updateUser = (userId, userName, userAge, userAddress, userGender) => ({
  type: UPDATE_USER,
  payload: { userId, userName, userAge, userAddress, userGender },
});
export const deleteUser = (
  userId,
) => ({
  type: DELETE_USER,
  payload: { userId },
});
