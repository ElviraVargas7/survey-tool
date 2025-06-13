import { combineReducers } from '@reduxjs/toolkit';
import membersReducer from './reducers/membersReducer';
import questionsReducer from './reducers/questionsReducer';

export default combineReducers({
  membersReducer,
  questionsReducer,
});
