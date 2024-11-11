// src/redux/rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';

const reducer = combineReducers({
  auth: authReducer,
  // other reducers can be added here
});

export default reducer;
