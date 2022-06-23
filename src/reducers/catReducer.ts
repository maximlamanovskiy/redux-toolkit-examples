import { AnyAction } from "redux";

import * as types from "../actions/cats/actionTypes";

export interface CatState {
  data?: string;
  name?: string;
  id?: number;
}

const initialState: CatState = {};

const catReducer = (state = initialState, action: AnyAction): CatState => {
  switch (action.type) {
    case types.CHANGE_ID: {
      return {
        ...state,
        id: action.id,
      };
    }
    case types.GET_CAT_NAME_SUCCESS: {
      return {
        ...state,
        name: action.name,
      };
    }
    case types.GET_CAT_IMAGE_SUCCESS: {
      return {
        ...state,
        data: action.body,
      };
    }
    default: {
      return state;
    }
  }
};

export default catReducer;
