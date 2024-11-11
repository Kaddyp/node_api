// src/redux/actions.js
import { SET_TOKEN, CLEAR_TOKEN, SET_ROLE, CLEAR_ROLE } from './actionTypes';

// Action to set the token
export const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
});

// Action to clear the token
export const clearToken = () => ({
  type: CLEAR_TOKEN,
});

// Action to set the role
export const setRole = role => ({
  type: SET_ROLE,
  payload: role,
});

// Action to clear the role
export const clearRole = () => ({
  type: CLEAR_ROLE,
});