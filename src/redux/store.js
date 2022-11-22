import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSliceReducer from '../redux/slice/CartSlice'
import authSliceReducer from '../redux/slice/AuthSlice'

const rootReducer = combineReducers({
  cart: cartSliceReducer,
  auth: authSliceReducer,
})

export const store = configureStore({
  reducer: rootReducer,
});

