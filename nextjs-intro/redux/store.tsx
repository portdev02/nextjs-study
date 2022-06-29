import {configureStore, combineReducers} from '@reduxjs/toolkit';
import userReducer from "./userSlice"

const rootReducer = combineReducers({
  auth: userReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;