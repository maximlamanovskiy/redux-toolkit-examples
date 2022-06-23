import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getImage } from "../../fetcher/fetcher";

import * as types from "./actionTypes";

export default function getCatImage(): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch({ type: types.GET_CAT_IMAGE_FETCH });
    return getImage("https://cataas.com/cat")
      .then((body) => {
        dispatch({
          type: types.GET_CAT_IMAGE_SUCCESS,
          body,
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
