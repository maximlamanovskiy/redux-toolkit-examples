import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import catReducer, { CAT_SLICE } from "../features/cat/catSlice";
import counterReducer from "../features/counter/counterSlice";
import nameReducer, { NAME_SLICE } from "../features/name/nameReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [CAT_SLICE]: catReducer,
    [NAME_SLICE]: nameReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
