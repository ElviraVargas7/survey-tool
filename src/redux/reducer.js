import { configureStore, combineReducers } from '@reduxjs/toolkit';
import membersReducer from './reducers/membersReducer';

export default combineReducers({
  membersReducer,
});
