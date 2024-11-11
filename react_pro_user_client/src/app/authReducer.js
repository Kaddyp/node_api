// src/redux/authReducer.js
import { SET_TOKEN, CLEAR_TOKEN, SET_ROLE, CLEAR_ROLE } from './actionTypes';

const initialState = {
  token: null,
  role: null, 
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case CLEAR_TOKEN:
      return {
        ...state,
        token: null,
      };
    case SET_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    case CLEAR_ROLE:
      return {
        ...state,
        role: null,
      };
    default:
      return state;
  }
};

export default authReducer;
