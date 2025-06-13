import { combineReducers } from '@reduxjs/toolkit';
import membersReducer from './reducers/membersReducer';
import questionsReducer from './reducers/questionsReducer';
import answersReducer from './reducers/answersReducer';

export default combineReducers({
  membersReducer,
  questionsReducer,
  answersReducer,
});
