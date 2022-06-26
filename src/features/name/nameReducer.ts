import { createAction, createReducer } from "@reduxjs/toolkit";

export const NAME_SLICE = "NAME_SLICE";

interface NameState {
  name?: string;
}

const initialState: NameState = {};

const NAMES = [
  "Luna",
  "Milo",
  "Oliver",
  "Leo",
  "Loki",
  "Bella",
  "Charlie",
  "Willow",
  "Lucy",
  "Simba",
];

export const getName = createAction(`${NAME_SLICE}/getName`);
export const setName = createAction<string>(`${NAME_SLICE}/setName`);

const nameReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getName, (state) => {
      state.name = NAMES[Math.floor(Math.random() * 10)];
    })
    .addCase(setName, (state, action) => {
      state.name = action.payload;
    });
});

export default nameReducer;
