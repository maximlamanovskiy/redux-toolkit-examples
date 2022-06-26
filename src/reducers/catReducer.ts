import { AnyAction } from "redux";

import * as types from "../actions/cats/actionTypes";

export interface CatState {
  data?: string;
  id?: number;
}

export const initialState: CatState = {};

const catReducer = (state = initialState, action: AnyAction): CatState => {
  switch (action.type) {
    case types.GET_CAT_IMAGE_SUCCESS: {
      return {
        ...state,
        data: action.url,
      };
    }
    default: {
      return state;
    }
  }
};

export default catReducer;
