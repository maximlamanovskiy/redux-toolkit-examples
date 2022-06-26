import { AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { getImage } from "../../fetcher/fetcher";
import { RootState } from "../../store/store";

import * as types from "./actionTypes";

export default function getCatGif(): ThunkAction<
  Promise<void>,
  RootState,
  {},
  AnyAction
> {
  return (dispatch: Dispatch) => {
    dispatch({ type: types.GET_CAT_IMAGE_FETCH });
    return getImage("https://cataas.com/c/gif")
      .then((url) => {
        dispatch({
          type: types.GET_CAT_IMAGE_SUCCESS,
          url,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.GET_CAT_IMAGE_ERROR,
          error,
        });
      });
  };
}
