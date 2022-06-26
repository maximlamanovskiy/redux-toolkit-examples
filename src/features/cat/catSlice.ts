import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getImage } from "../../fetcher/fetcher";
import { getCat, getCatWithFetcher } from "./catApi";

export const CAT_SLICE = "CAT_SLICE";

export interface CatState {
  status: "NONE" | "LOADING" | "SUCCEED" | "FAILED";
  data?: string;
}

const initialState: CatState = {
  status: "NONE",
  data: undefined,
};

export const getCatImageWithFetcher = createAsyncThunk<string, void>(
  `${CAT_SLICE}/getCatImageWithFetcher`,
  async () => await getImage("https://cataas.com/c")
);

export const getCatImageWithApi = createAsyncThunk(
  `${CAT_SLICE}/getCatImageWithApi`,
  async () => await getCat("https://cataas.com/c")
);

export const getCatImageWithApiFetcher = createAsyncThunk(
  `${CAT_SLICE}/getCatImageWithApiFetcher`,
  async () => await getCatWithFetcher("https://cataas.com/c")
);

export const getCatGif = createAsyncThunk(
  `${CAT_SLICE}/getCatGif`,
  async () => await getCat("https://cataas.com/c/gif")
);

const catSlice = createSlice({
  name: CAT_SLICE,
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCatGif.pending, (state) => {
        state.status = "LOADING";
      })
      .addCase(getCatGif.fulfilled, (state, action) => {
        state.status = "SUCCEED";
        state.data = action.payload;
      })
      .addCase(getCatGif.rejected, (state) => {
        state.status = "FAILED";
      })
      .addCase(getCatImageWithApiFetcher.fulfilled, (state, action) => {
        state.status = "SUCCEED";
        state.data = action.payload;
      })
      .addCase(getCatImageWithApi.fulfilled, (state, action) => {
        state.status = "SUCCEED";
        state.data = action.payload;
      })
      .addCase(getCatImageWithFetcher.fulfilled, (state, action) => {
        state.status = "SUCCEED";
        state.data = action.payload;
      });
  },
});

export const { reset } = catSlice.actions;

export default catSlice.reducer;
