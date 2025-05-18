import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import pourReducer from '../features/FillWaterTask/model/fillWaterSlice';
import balanceReducer from '../features/BalanceScaleTask/model/balanceSlice';


const rootReducer = combineReducers({
     fillWater: pourReducer,
     balance: balanceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
