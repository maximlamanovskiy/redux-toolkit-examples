import { createSelector } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CAT_SLICE } from "../features/cat/catSlice";
import { NAME_SLICE } from "../features/name/nameReducer";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const getCatAndName = createSelector(
  (state: RootState) => state[CAT_SLICE].data,
  (state: RootState) => state[NAME_SLICE].name,
  (data, name) => ({ data, name })
);
